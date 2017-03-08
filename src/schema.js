import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,  
  GraphQLNonNull,  
} from 'graphql';

import { ProjectType, PersonType, TaskType } from "./types";
import  { projectsList, peopleList, tasksList }  from "./data";

const Query = new GraphQLObjectType({
  name: "DiberrSchema",
  description: "The objects exposed by Dibberr",
  fields: () => ({
    projects: {
      type: new GraphQLList(ProjectType),
      description: "All projects belonging to the authenticated organization",
      resolve: () => {
        return projectsList;
      }
    },
    project: {
      type: ProjectType,
      description: "A sigle project specified by the ID",
      args: {
        projectID: {
          type: new GraphQLNonNull(GraphQLString),
          description: "The ID of the project to view"
        }
      },
      resolve: (root, { projectID }) => {
        return projectsList.filter((project) => project.id === projectID)[0];        
      }
    },
    people: {
      type: new GraphQLList(PersonType),
      description: "Everyone registered as a user in this organization",
      resolve: () => {
        return Object.values(peopleList);
      }
    },
    person: {
      type: PersonType,
      description: "A single person specified by the ID",
      args: {
        personID: {
          type: new GraphQLNonNull(GraphQLString),
          description: "The ID of the person to view"
        }        
      },
      resolve: (root, { personID }) => {
        return peopleList[personID];
      }
    },
    tasks: {
      type: new GraphQLList(TaskType),
      description: "The collection of tasks created by this user",
      resolve: () => {
        return tasksList;
      }
    },
    task: {
      type: TaskType,
      description: "A single task specified by an ID",
      args: {
        taskID: {
          type: new GraphQLNonNull(GraphQLString),
          description: "The task ID of the task to view"
        }
      },
      resolve: (root, { taskID }) => {
        return tasksList.filter(task => task.id === taskID);
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
