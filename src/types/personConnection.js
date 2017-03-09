import {
    connectionDefinitions,
} from 'graphql-relay';

import PersonType from './person';

const { connectionType: PersonConnection }
    = connectionDefinitions({ name: 'Person', nodeType: PersonType });

export default PersonConnection;
