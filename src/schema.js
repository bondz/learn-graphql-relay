import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import {
    connectionArgs,
    connectionFromArray
} from 'graphql-relay';

import {
  PersonConnection, ProjectConnection, TaskConnection, PersonType,
  ProjectType, TaskType, nodeField } from './types';
import  { projectsList, peopleList, tasksList }  from "./data";

const Query = new GraphQLObjectType({
  name: "DiberrSchema",
  description: "The objects exposed by Dibberr",
  fields: () => ({
    node: nodeField,
    projects: {
      type: ProjectConnection,
      description: "All projects belonging to the authenticated organization",
      args: connectionArgs,
      resolve: (root, args) => {
        return connectionFromArray(
          projectsList,
          args
        );
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
      type: PersonConnection,
      description: "Everyone registered as a user in this organization",
      args: connectionArgs,
      resolve: (root, args) => {
        return connectionFromArray(
          Object.values(peopleList),
          args
        );
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
      type: TaskConnection,
      description: "The collection of tasks created by this user",
      args: connectionArgs,
      resolve: (root, args) => {
        return connectionFromArray(
          tasksList,
          args
        );
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
