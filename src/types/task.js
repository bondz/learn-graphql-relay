import {
    GraphQLObjectType,
    GraphQLString,    
    GraphQLBoolean,
} from 'graphql';

import {
    globalIdField,
    connectionArgs,
    connectionFromArray
} from 'graphql-relay';

import {
    createdField,
    editedField
} from "../common-fields";

import ProjectType from "./project"; 
import PersonType from "./person";
import { nodeInterface } from './connections';
import PersonConnection from './personConnection';

import { projectsList, peopleList } from "../data";

const TaskType = new GraphQLObjectType({
    name: "Task",
    description: "A single task",
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField('Task'),
        title: {
            type: GraphQLString,
            description: "The title of this task"
        },
        description: {
            type: GraphQLString,
            description: "The summary of this task"
        },
        completed: {
            type: GraphQLBoolean,
            description: "Determines if this task has been marked as complete"
        },
        author: {
            type: PersonType,
            description: "The creator of this task",
            resolve: (task) => {
                return peopleList[task.author];
            }
        },
        hasProject: {
            type: GraphQLBoolean,
            description: "Switch to check if this task belongs to a project"
        },
        project: {
            type: ProjectType,
            description: "The Project this task belongs to",
            resolve: (task) => {
                return projectsList.filter(project => project.id === task.project)[0];
            }
        },
        assignedTo: {
            type: PersonConnection,
            description: "The people this tasks are assigned to",
            args: connectionArgs,
            resolve: (task, args) => {
                return connectionFromArray(
                    task.assignedTo.map(peopleID => peopleList[peopleID]),
                    args
                );
            }
        },
        created: createdField(),
        edited: editedField(),
    })
});

export default TaskType;
