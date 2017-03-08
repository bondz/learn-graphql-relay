import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} from 'graphql';

import {
  createdField,  
} from "../common-fields";

import TaskType from "./task";
import PersonType from "./person";

import { peopleList, tasksList } from "../data";

const ProjectType = new GraphQLObjectType({
  name: "Project",
  description: "A single project",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The identifier for this project"
    },
    title: {
      type: GraphQLString,
      description: "The title of the project"
    },
    description: {
      type: GraphQLString,
      description: "The user's description of this project"
    },
    tasks: {
      type: new GraphQLList(TaskType),
      args: {
        limit: {
          type: GraphQLInt,
          description: "Limit the number of tasks to return. Default is 10",
          defaultValue: 10
        }
      },
      description: "The tasks under this project",
      resolve: (project, { limit }) => {        
        return tasksList.filter(task => task.project === project.id).slice(0, limit);        
      }
    },
    managers: {
      type: new GraphQLList(PersonType),
      description: "The project managers assigned to this project",
      resolve: (project) => {
        return project.managers.map(personID => {
          return peopleList[personID];
        });        
      }
    },
    author: {
      type: PersonType,
      description: "The creator of this project",
      resolve: (project) => {
        return peopleList[project.author];
      }
    },
    created: createdField(),    
  })
});

export default ProjectType;
