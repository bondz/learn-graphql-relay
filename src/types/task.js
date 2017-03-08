import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,    
    GraphQLBoolean,
    GraphQLList,
} from 'graphql';

import {
    createdField,
    editedField
} from "../common-fields";

import ProjectType from "./project"; 
import PersonType from "./person";

import { projectsList, peopleList } from "../data";

const TaskType = new GraphQLObjectType({
    name: "Task",
    description: "A single task",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: "An identifier for this task"
        },
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
            type: new GraphQLList(PersonType),
            description: "The people this tasks are assigned to",
            resolve: (task) => {
                return task.assignedTo.map(peopleID => peopleList[peopleID]);
            }
        },
        created: createdField(),
        edited: editedField(),
    })
});

export default TaskType;
