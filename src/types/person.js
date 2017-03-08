import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,    
} from 'graphql';

import {
    createdField,
    editedField,
} from "../common-fields";

import ProjectType from "./project";
import TaskType from "./task";

import { projectsList, tasksList } from "../data";

const PersonType = new GraphQLObjectType({
    name: "Person",
    description: "A resource owner",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: "An identifier for this person"
        },
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
            type: new GraphQLList(ProjectType),
            description: "The projects created by this person",
            resolve: (person) => {
                return projectsList.filter(project => project.author === person.id);
            }
        },
        projectsManaging: {
            type: new GraphQLList(ProjectType),
            description: "The projects managed by this person",
            resolve: (person) => {
                return projectsList.filter(project => project.managers.includes(person.id));
            }
        },
        assignedTasks: {
            type: new GraphQLList(TaskType),
            description: "The tasks assigned to this person",
            resolve: (person) => {
                return tasksList.filter(task => task.assignedTo.includes(person.id));
            }
        },        
        created: createdField(),
        edited: editedField()
    })
});

export default PersonType;
