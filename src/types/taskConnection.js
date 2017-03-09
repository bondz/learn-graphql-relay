import {
    connectionDefinitions,
} from 'graphql-relay';

import TaskType from './task';

const { connectionType: TaskConnection }
    = connectionDefinitions({ name: 'Task', nodeType: TaskType });

export default TaskConnection;
