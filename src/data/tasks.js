const tasksList = [
    {
        id: "4bb9b556071cbb6a",
        title: "My first task",
        description: "This is the very first task created on the Diberr platform",
        completed: false,
        author: "020c535baa9ebfb3",
        hasProject: true,
        project: "ebfa27ac019ba0c9",
        assignedTo: ["20f2391a7483c900"],
        created: "2015-07-06T21:15:20.047Z",
        edited: ""
    },
    {
        id: "ba0efe4fe3661c8a",
        title: "An orphan task",
        description: "A task can be created without a parent project",
        completed: true,
        author: "020c535baa9ebfb3",
        hasProject: true,
        project: null,
        assignedTo: ["020c535baa9ebfb3"],
        created: "2016-05-03T03:40:40.104Z",
        edited: "2016-05-03T03:41:01.244Z"
    },
    {
        id: "a06f4e0a2cbd40d9",
        title: "Joined Dibber",
        description: "We are now using diberr to manage projects. Transition to the platform",
        completed: true,
        author: "20f2391a7483c900",
        hasProject: true,
        project: "ebfa27ac019ba0c9",
        assignedTo: ["020c535baa9ebfb3", "20f2391a7483c900"],
        created: "2015-07-07T9:05:40.496Z",
        edited: "2015-12-07T8:43:15.109Z"
    },
    {
        id: "b50aff83eb6a5271",
        title: "Create Entity Dependency Graph",
        description: "Entity dependency graph to show interdependencies for Diberr project",
        completed: true,
        author: "52d2bae793e73d2c",
        hasProject: true,
        project: "ea9a374fd8149706",
        assignedTo: ["3793cb609659287b"],
        created: "2016-11-10T8:15:14.263Z",
        edited: "2016-11-11T10:38:49.984Z"
    },
    {
        id: "25e7a5a3d2261ae8",
        title: "Create SOP",
        description: "Create SOP for Diberr projects",
        completed: false,
        author: "3793cb609659287b",
        hasProject: true,
        project: "ea9a374fd8149706",
        assignedTo: ["52d2bae793e73d2c"],
        created: "2016-06-29T8:25:10.099Z",
        edited: ""
    },
    {
        id: "6db89e0c3a8277dd",
        title: "Attend Diberr Meeting",
        description: "Meeting at 10:00 AM",
        completed: true,
        author: "52d2bae793e73d2c",
        hasProject: true,
        project: "ea9a374fd8149706",
        assignedTo: ["3793cb609659287b","9b4560211207d0ab","2460606c9e734e74","52d2bae793e73d2c", "398fa1225cda02d2", "d1523d14f7e4a7f1"],
        created: "2016-11-11T17:04:21.125Z",
        edited: "2016-12-11T10:18:50.886Z"
    },
    {
        id: "67eb314bc698cd22",
        title: "Fix Noisy Inverter",
        description: "The inverter acts up and is noisy",
        completed: false,
        author: "20f2391a7483c900",
        hasProject: true,
        project: "07521075791f10f7",
        assignedTo: ["52d2bae793e73d2c"],
        created: "2016-11-09T12:00:03.071Z",
        edited: ""
    },
    {
        id: "d00b3fb13d3e086f",
        title: "Place Job ads",
        description: "Place ads for recruitment on Job platforms",
        completed: true,
        author: "9b4560211207d0ab",
        hasProject: true,
        project: "e315804f47b8f37c",
        assignedTo: ["9b4560211207d0ab"],
        created: "2015-1-13T10:15:11.102Z",
        edited: "2015-1-13T13:09:14.121Z"
    },
    {
        id: "416282f9321d7027",
        title: "Visit NYSC Camps",
        description: "Visit NYSC Camps fro recruitment",
        completed: true,
        author: "9b4560211207d0ab",
        hasProject: true,
        project: "e315804f47b8f37c",
        assignedTo: ["9b4560211207d0ab"],
        created: "2015-02-11T08:22:13.904Z",
        edited: "2015-05-19T17:30:10.447Z"
    },
    {
        id: "195ea7c4c21dc8d1",
        title: "Plan Mannequin Challenge",
        description: "Send everyone a memo for the mannequin challenge",
        completed: true,
        author: "398fa1225cda02d2",
        hasProject: true,
        project: "a3c15320f332d5f3",
        assignedTo: ["0fcde7c0cc84051c", "9b4560211207d0ab"],
        created: "2016-11-1T13:24:14.002Z",
        edited: "2016-11-2T12:09:19.731Z"
    },
    {
        id: "7a6f097ca54d90ac",
        title: "Upload Manequin Challenge video",
        description: "Upload our mannequin challenge video to social media",
        completed: false,
        author: "398fa1225cda02d2",
        hasProject: true,
        project: "a3c15320f332d5f3",
        assignedTo: ["2460606c9e734e74"],
        created: "2016-11-2T12:13:44.566Z",
        edited: "2016-11-2T15:21:12.900Z"
    },
    {
        id: "a0592a25e2503b11",
        title: "Training conference",
        description: "Attend training conference",
        completed: false,
        author: "980e17f783345f64",
        hasProject: true,
        project: "e3d0ccbbed30d6fc",
        assignedTo: ["980e17f783345f64", "52d2bae793e73d2c", "3793cb609659287b", "980e17f783345f64"],
        created: "2016-11-05T10:01:23.331Z",
        edited: "2016-11-07T14:12:02.671Z"
    }
];

export default tasksList;
