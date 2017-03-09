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
    editedField,
} from "../common-fields";

import ProjectConnection from './projectConnection';
import TaskConnection from './taskConnection';
import { nodeInterface } from './connections';

import { projectsList, tasksList } from "../data";

const PersonType = new GraphQLObjectType({
    name: "Person",
    description: "A resource owner",
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField('Person'),
        email: {
            type: GraphQLString,
            description: "The email address of this person"
        },
        phone: {
            type: GraphQLString,
            description: "The phone number of this person"
        },
        firstname: {
            type: GraphQLString,
            description: "The first name of this person"
        },
        lastname: {
            type: GraphQLString,
            description: "The last name of this person"
        },
        fullname: {
            type: GraphQLString,
            description: "The fullname of this person",
            resolve: (person) => `${person.firstname} ${person.lastname}`
        },
        projectsAuthored: {
            type: ProjectConnection,
            description: "The projects created by this person",
            args: connectionArgs,
            resolve: (person, args) => {
                return connectionFromArray(
                    projectsList.filter(project => project.author === person.id),
                    args
                );
            }
        },
        projectsManaging: {
            type: ProjectConnection,
            description: "The projects managed by this person",
            args: connectionArgs,
            resolve: (person, args) => {
                return connectionFromArray(
                    projectsList.filter(project => project.managers.includes(person.id)),
                    args
                );
            }
        },
        assignedTasks: {
            type: TaskConnection,
            description: "The tasks assigned to this person",
            args: connectionArgs,
            resolve: (person, args) => {
                return connectionFromArray(
                    tasksList.filter(task => task.assignedTo.includes(person.id)),
                    args
                );
            }
        },
        created: createdField(),
        edited: editedField()
    })
});

export default PersonType;
