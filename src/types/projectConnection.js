import {
    connectionDefinitions,
} from 'graphql-relay';

import ProjectType from './project';

const { connectionType: ProjectConnection }
    = connectionDefinitions({ name: 'Project', nodeType: ProjectType });

export default ProjectConnection;
