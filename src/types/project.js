import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import {
    globalIdField,
    connectionArgs,
    connectionFromArray
} from 'graphql-relay';

import {
  createdField,  
} from "../common-fields";

import PersonType from './person';
import { nodeInterface } from './connections';
import PersonConnection from './personConnection';
import TaskConnection from './taskConnection';

import { peopleList, tasksList } from "../data";

const ProjectType = new GraphQLObjectType({
  name: "Project",
  description: "A single project",
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('Project'),
    title: {
      type: GraphQLString,
      description: "The title of the project"
    },
    description: {
      type: GraphQLString,
      description: "The user's description of this project"
    },
    tasks: {
      type: TaskConnection,
      args: connectionArgs,
      description: "The tasks under this project",
      resolve: (project, args) => {        
        return connectionFromArray(
          tasksList.filter(task => task.project === project.id),
          args
        );
      }
    },
    managers: {
      type: PersonConnection,
      description: "The project managers assigned to this project",
      args: connectionArgs,
      resolve: (project, args) => {
        return connectionFromArray(
          project.managers.map(personID => {
            return peopleList[personID];
          }),
          args
        );
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
