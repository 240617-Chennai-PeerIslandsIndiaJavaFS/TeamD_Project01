
export let Clients = [
    {
        client_id: 1,
        client_company: "Tech Solutions",
        client_contact_name: "John Doe",
        client_number: "123-456-7890",
        client_email: "john.doe@techsolutions.com",
        address: "123 Tech Street, Vizianagaram, AP"
    },
    {
        client_id: 2,
        client_company: "Innovatech",
        client_contact_name: "Jane Smith",
        client_number: "987-654-3210",
        client_email: "jane.smith@innovatech.com",
        address: "456 Innovation Blvd, Vizianagaram, AP"
    },
    {
        client_id: 3,
        client_company: "Web Works",
        client_contact_name: "Alice Brown",
        client_number: "321-654-0987",
        client_email: "alice.brown@webworks.com",
        address: "789 Web Street, Vizianagaram, AP"
    },
    {
        client_id: 4,
        client_company: "Creative Minds",
        client_contact_name: "Robert Johnson",
        client_number: "555-123-4567",
        client_email: "robert.johnson@creativeminds.com",
        address: "456 Creative Blvd, Vizianagaram, AP"
    },
    {
        client_id: 5,
        client_company: "Data Insights",
        client_contact_name: "Emily Davis",
        client_number: "666-777-8888",
        client_email: "emily.davis@datainsights.com",
        address: "123 Data Drive, Vizianagaram, AP"
    },
    {
        client_id: 6,
        client_company: "Future Tech",
        client_contact_name: "Michael Wilson",
        client_number: "999-888-7777",
        client_email: "michael.wilson@futuretech.com",
        address: "456 Future Lane, Vizianagaram, AP"
    },
    {
        client_id: 7,
        client_company: "Bright Ideas",
        client_contact_name: "Jessica Taylor",
        client_number: "111-222-3333",
        client_email: "jessica.taylor@brightideas.com",
        address: "789 Bright Avenue, Vizianagaram, AP"
    },
    {
        client_id: 8,
        client_company: "Innovative Solutions",
        client_contact_name: "Daniel Martinez",
        client_number: "444-555-6666",
        client_email: "daniel.martinez@innovativesolutions.com",
        address: "123 Innovation Street, Vizianagaram, AP"
    },
    {
        client_id: 9,
        client_company: "Smart Systems",
        client_contact_name: "Sarah Lee",
        client_number: "777-888-9999",
        client_email: "sarah.lee@smartsystems.com",
        address: "456 Smart Road, Vizianagaram, AP"
    },
    {
        client_id: 10,
        client_company: "NextGen Technologies",
        client_contact_name: "David White",
        client_number: "222-333-4444",
        client_email: "david.white@nextgentechnologies.com",
        address: "789 NextGen Boulevard, Vizianagaram, AP"
    }
]
export let  Users = [
    {
      "user_id": 1,
      "user_name": "Alice Johnson",
      "user_role": "Manager", 
      "email": "alice.johnson@example.com",
      "password": "password123",
      "phone": "111-222-3333",
      "manager_id": 3,
      "status": "active"
    },
    {
      "user_id": 2,
      "user_name": "Bob Brown",
      "user_role": "Admin",
      "email": "bob.brown@example.com",
      "password": "password123",
      "phone": "444-555-6666",
      "manager_id": 3,
      "status": "active"
    },
    {
      "user_id": 3,
      "user_name": "Eve Davis",
      "user_role": "Manager",
      "email": "manager@gmail.com",
      "password": "password123",
      "phone": "777-888-9999",
      "manager_id": null,
      "status": "active"
    },
    {
      "user_id": 4,
      "user_role": "Associate", 
      "user_name": "Charlie Green",
      "email": "charlie.green@example.com",
      "password": "password123",
      "phone": "555-666-7777",
      "manager_id": 3,
      "status": "active"
    },
    {
      "user_id": 5,
      "user_role": "Associate",  
      "user_name": "Diana Blue",
      "email": "diana.blue@example.com",
      "password": "password123",
      "phone": "888-999-0000",
      "manager_id": 3,
      "status": "active"
    },
    {
      "user_id": 6,
      "user_role": "Manager",
      "email": "ethan.black@example.com",
      "password": "password123",
      "phone": "222-333-4444",
      "manager_id": 3,
      "status": "active"
    },
    {
      "user_id": 7,
      "user_role": "Admin",
      "email": "admin@gmail.com",
      "password": "password123",
      "phone": "555-666-7777",
      "manager_id": 3,
      "status": "active"
    },
    {
      "user_id": 8,
      "user_role": "Associate",  // New role "Admin"
      "user_name": "George Brown",
      "email": "george.brown@example.com",
      "password": "password123",
      "phone": "444-555-6666",
      "manager_id": null,
      "status": "active"
    },
    {
      "user_id": 9,
      "user_role": "Associate",
      "email": "hannah.gray@example.com",
      "password": "password123",
      "phone": "111-222-3333",
      "manager_id": 3,
      "status": "active"
    },
    {
      "user_id": 10,
      "user_role": "Associate",
      "email": "associate@gmail.com",
      "password": "password123",
      "phone": "222-333-4444",
      "manager_id": 3,
      "status": "active"
    },
    
  ]
  
export let Milestones = [
    { milestone_id: 1, status: "In queue" },
    { milestone_id: 2, status: "Commenced" },
    { milestone_id: 3, status: "Testing" },
    { milestone_id: 4, status: "In review" },
    { milestone_id: 5, status: "Blocked" },
    { milestone_id: 6, status: "Merged" },
    { milestone_id: 7, status: "Closed" },
]
export let Projects = [
    {
        project_id: 1,
        client_id: 1,
        project_name: "Revamp Website",
        description: "Revamp the client's main website with new design and features",
        start_date: "2024-01-01",
        milestone_id: 2,
        end_date: "2024-06-30",
        manager_id: 3
    },
    {
        project_id: 2,
        client_id: 2,
        project_name: "Mobile App Development",
        description: "Develop a mobile application for the client",
        start_date: "2024-02-01",
        milestone_id: 3,
        end_date: "2024-07-31",
        manager_id: 3
    },
    {
        project_id: 3,
        client_id: 3,
        project_name: "E-commerce Platform",
        description: "Build an e-commerce platform for the client",
        start_date: "2024-03-01",
        milestone_id: 4,
        end_date: "2024-08-31",
        manager_id: 3
    },
    {
        project_id: 4,
        client_id: 4,
        project_name: "Marketing Campaign",
        description: "Design and implement a marketing campaign",
        start_date: "2024-04-01",
        milestone_id: 5,
        end_date: "2024-09-30",
        manager_id: 3
    },
    {
        project_id: 5,
        client_id: 5,
        project_name: "Data Analysis",
        description: "Perform data analysis and provide insights",
        start_date: "2024-05-01",
        milestone_id: 6,
        end_date: "2024-10-31",
        manager_id: 3
    },
    {
        project_id: 6,
        client_id: 6,
        project_name: "System Upgrade",
        description: "Upgrade the client's existing system",
        start_date: "2024-06-01",
        milestone_id: 7,
        end_date: "2024-11-30",
        manager_id: 3
    },
    {
        project_id: 7,
        client_id: 7,
        project_name: "Product Launch",
        description: "Plan and execute a product launch",
        start_date: "2024-07-01",
        milestone_id: 8,
        end_date: "2024-12-31",
        manager_id: 3
    },
    {
        project_id: 8,
        client_id: 8,
        project_name: "Research and Development",
        description: "Conduct research and development for a new product",
        start_date: "2024-08-01",
        milestone_id: 9,
        end_date: "2024-12-31",
        manager_id: 3
    },
    {
        project_id: 9,
        client_id: 9,
        project_name: "Customer Support System",
        description: "Develop a new customer support system",
        start_date: "2024-09-01",
        milestone_id: 10,
        end_date: "2024-12-31",
        manager_id: 3
    },
    {
        project_id: 10,
        client_id: 10,
        project_name: "AI Integration",
        description: "Integrate AI features into existing systems",
        start_date: "2024-10-01",
        milestone_id: 1,
        end_date: "2024-12-31",
        manager_id: 3
    }

]
export let tasks = [
{
    task_id: 1,
    task_name: "Write unit tests for login functionality",
    project: "E-commerce Platform",
    milestone: "In queue",
    user_assigned: "Alice (QA)",
    priority: "High",
    description: "Create unit tests to cover all login scenarios, including valid/invalid credentials, edge cases, and error handling.",
    due_date: "2024-07-22"
},
{
    task_id: 2,
    task_name: "Design new checkout process flow",
    project: "E-commerce Platform",
    milestone: "Commenced",
    user_assigned: "Bob (UX/UI)",
    priority: "Medium",
    description: "Revamp the checkout process to improve user experience and reduce cart abandonment rates.",
    due_date: "2024-07-30"
},
{
    task_id: 3,
    task_name: "Implement payment gateway integration",
    project: "E-commerce Platform",
    milestone: "Testing",
    user_assigned: "Charlie (Backend)",
    priority: "High",
    description: "Integrate a secure payment gateway to process online transactions securely and efficiently.",
    due_date: "2024-08-05"
},
{
    task_id: 4,
    task_name: "Optimize database queries",
    project: "E-commerce Platform",
    milestone: "In review",
    user_assigned: "David (Database Admin)",
    priority: "Medium",
    description: "Fine-tune SQL queries to enhance database performance and reduce query execution time.",
    due_date: "2024-07-25"
},
{
    task_id: 5,
    task_name: "Conduct load testing on server infrastructure",
    project: "E-commerce Platform",
    milestone: "Merged",
    user_assigned: "Eva (DevOps)",
    priority: "High",
    description: "Perform load testing to evaluate server capacity under various traffic conditions.",
    due_date: "2024-08-10"
},
{
    task_id: 6,
    task_name: "Prepare user documentation for new features",
    project: "E-commerce Platform",
    milestone: "Closed",
    user_assigned: "Fiona (Technical Writer)",
    priority: "Low",
    description: "Create comprehensive user guides and documentation for recently added features.",
    due_date: "2024-08-15"
},
{
    task_id: 7,
    task_name: "Enhance product search functionality",
    project: "E-commerce Platform",
    milestone: "In queue",
    user_assigned: "George (Frontend)",
    priority: "Medium",
    description: "Improve search algorithm to provide more accurate and relevant product search results.",
    due_date: "2024-07-28"
},
{
    task_id: 8,
    task_name: "Update product images for marketing campaign",
    project: "E-commerce Platform",
    milestone: "Commenced",
    user_assigned: "Hannah (Marketing)",
    priority: "Low",
    description: "Replace outdated product images with high-quality images for an upcoming marketing campaign.",
    due_date: "2024-08-02"
},
{
    task_id: 9,
    task_name: "Deploy latest security patches",
    project: "E-commerce Platform",
    milestone: "Testing",
    user_assigned: "Isaac (Security)",
    priority: "High",
    description: "Apply security patches and updates to protect the platform from potential vulnerabilities.",
    due_date: "2024-08-07"
},
{
    task_id: 10,
    task_name: "Monitor performance metrics during peak hours",
    project: "E-commerce Platform",
    milestone: "In review",
    user_assigned: "Jack (Analytics)",
    priority: "Medium",
    description: "Monitor and analyze performance metrics to identify and resolve bottlenecks during peak traffic hours.",
    due_date: "2024-07-31"
}
]

export let Teams = [
    {
        team_id: 1,
        team_name: "Development Team",
        project_id: 1,
        team_members: [1, 6, 9]
    },
    {
        team_id: 2,
        team_name: "Design Team",
        project_id: 2,
        team_members: [2, 7]
    },
    {
        team_id: 3,
        team_name: "Testing Team",
        project_id: 3,
        team_members: [4]
    },
    {
        team_id: 4,
        team_name: "Marketing Team",
        project_id: 4,
        team_members: [3, 5]
    },
    {
        team_id: 5,
        team_name: "Data Team",
        project_id: 5,
        team_members: [1, 2]
    },
    {
        team_id: 6,
        team_name: "Upgrade Team",
        project_id: 6,
        team_members: [6, 8]
    },
    {
        team_id: 7,
        team_name: "Product Launch Team",
        project_id: 7,
        team_members: [5, 10]
    },
    {
        team_id: 8,
        team_name: "Research Team",
        project_id: 8,
        team_members: [7, 9]
    },
    {
        team_id: 9,
        team_name: "Support Team",
        project_id: 9,
        team_members: [3, 10]
    },
    {
        team_id: 10,
        team_name: "AI Team",
        project_id: 10,
        team_members: [1, 4, 6]
    }
]
export let Messages =  [
    {
        message_id: 1,
        subject: "Project Kickoff",
        message: "Let's get started with the project.",
        sender_id: 3,
        receiver_id: 1
    },
    {
        message_id: 2,
        subject: "Design Review",
        message: "Please review the design documents.",
        sender_id: 3,
        receiver_id: 2
    },
    {
        message_id: 3,
        subject: "Code Review",
        message: "Submit your code for review.",
        sender_id: 3,
        receiver_id: 6
    },
    {
        message_id: 4,
        subject: "Testing Update",
        message: "Provide updates on the testing progress.",
        sender_id: 3,
        receiver_id: 4
    },
    {
        message_id: 5,
        subject: "Marketing Strategy",
        message: "Discuss the marketing strategy.",
        sender_id: 3,
        receiver_id: 5
    },
    {
        message_id: 6,
        subject: "Data Analysis",
        message: "Submit the data analysis report.",
        sender_id: 3,
        receiver_id: 1
    },
    {
        message_id: 7,
        subject: "System Upgrade",
        message: "Plan the system upgrade.",
        sender_id: 3,
        receiver_id: 8
    },
    {
        message_id: 8,
        subject: "Product Launch Plan",
        message: "Share the product launch plan.",
        sender_id: 3,
        receiver_id: 10
    },
    {
        message_id: 9,
        subject: "Research Update",
        message: "Provide updates on the research project.",
        sender_id: 3,
        receiver_id: 7
    },
    {
        message_id: 10,
        subject: "Support System",
        message: "Develop a new customer support system.",
        sender_id: 3,
        receiver_id: 3
    }
]
export let Timestamps = [
    {
        timestamp_id: 1,
        milestone_id: 1,
        user_id: 1,
        task_id: 1,
        comments: "Started working on the project.",
        timestamp: "2024-01-01T10:00:00Z"
    },
    {
        timestamp_id: 2,
        milestone_id: 2,
        user_id: 2,
        task_id: 2,
        comments: "Reviewed the project requirements.",
        timestamp: "2024-01-02T10:00:00Z"
    },
    {
        timestamp_id: 3,
        milestone_id: 3,
        user_id: 3,
        task_id: 3,
        comments: "Completed the initial design.",
        timestamp: "2024-01-03T10:00:00Z"
    },
    {
        timestamp_id: 4,
        milestone_id: 4,
        user_id: 4,
        task_id: 4,
        comments: "Started testing the project.",
        timestamp: "2024-01-04T10:00:00Z"
    },
    {
        timestamp_id: 5,
        milestone_id: 5,
        user_id: 5,
        task_id: 5,
        comments: "Reviewed the test results.",
        timestamp: "2024-01-05T10:00:00Z"
    },
    {
        timestamp_id: 6,
        milestone_id: 6,
        user_id: 6,
        task_id: 6,
        comments: "Merged the changes.",
        timestamp: "2024-01-06T10:00:00Z"
    },
    {
        timestamp_id: 7,
        milestone_id: 7,
        user_id: 7,
        task_id: 7,
        comments: "Closed the project.",
        timestamp: "2024-01-07T10:00:00Z"
    },
    {
        timestamp_id: 8,
        milestone_id: 8,
        user_id: 8,
        task_id: 8,
        comments: "Started working on the new project.",
        timestamp: "2024-01-08T10:00:00Z"
    },
    {
        timestamp_id: 9,
        milestone_id: 9,
        user_id: 9,
        task_id: 9,
        comments: "Completed the project review.",
        timestamp: "2024-01-09T10:00:00Z"
    },
    {
        timestamp_id: 10,
        milestone_id: 10,
        user_id: 10,
        task_id: 10,
        comments: "Started working on the new task.",
        timestamp: "2024-01-10T10:00:00Z"
    },
    {
        timestamp_id: 11,
        milestone_id: 1,
        user_id: 1,
        task_id: 1,
        comments: "Reviewed the initial project plan.",
        timestamp: "2024-01-11T10:00:00Z"
    },
    {
        timestamp_id: 12,
        milestone_id: 2,
        user_id: 2,
        task_id: 2,
        comments: "Reviewed the project requirements again.",
        timestamp: "2024-01-12T10:00:00Z"
    },
    {
        timestamp_id: 13,
        milestone_id: 3,
        user_id: 3,
        task_id: 3,
        comments: "Finalized the design.",
        timestamp: "2024-01-13T10:00:00Z"
    },
    {
        timestamp_id: 14,
        milestone_id: 4,
        user_id: 4,
        task_id: 4,
        comments: "Completed the initial testing.",
        timestamp: "2024-01-14T10:00:00Z"
    },
    {
        timestamp_id: 15,
        milestone_id: 5,
        user_id: 5,
        task_id: 5,
        comments: "Reviewed the final test results.",
        timestamp: "2024-01-15T10:00:00Z"
    },
    {
        timestamp_id: 16,
        milestone_id: 6,
        user_id: 6,
        task_id: 6,
        comments: "Merged the final changes.",
        timestamp: "2024-01-16T10:00:00Z"
    },
    {
        timestamp_id: 17,
        milestone_id: 7,
        user_id: 7,
        task_id: 7,
        comments: "Closed the project.",
        timestamp: "2024-01-17T10:00:00Z"
    },
    {
        timestamp_id: 18,
        milestone_id: 8,
        user_id: 8,
        task_id: 8,
        comments: "Started working on the new project.",
        timestamp: "2024-01-18T10:00:00Z"
    },
    {
        timestamp_id: 19,
        milestone_id: 9,
        user_id: 9,
        task_id: 9,
        comments: "Completed the project review.",
        timestamp: "2024-01-19T10:00:00Z"
    },
    {
        timestamp_id: 20,
        milestone_id: 10,
        user_id: 10,
        task_id: 10,
        comments: "Started working on the new task.",
        timestamp: "2024-01-20T10:00:00Z"
    },
    {
        timestamp_id: 21,
        milestone_id: 1,
        user_id: 1,
        task_id: 1,
        comments: "Reviewed the initial project plan.",
        timestamp: "2024-01-21T10:00:00Z"
    },
    {
        timestamp_id: 22,
        milestone_id: 2,
        user_id: 2,
        task_id: 2,
        comments: "Reviewed the project requirements again.",
        timestamp: "2024-01-22T10:00:00Z"
    },
    {
        timestamp_id: 23,
        milestone_id: 3,
        user_id: 3,
        task_id: 3,
        comments: "Finalized the design.",
        timestamp: "2024-01-23T10:00:00Z"
    },
    {
        timestamp_id: 24,
        milestone_id: 4,
        user_id: 4,
        task_id: 4,
        comments: "Completed the initial testing.",
        timestamp: "2024-01-24T10:00:00Z"
    },
    {
        timestamp_id: 25,
        milestone_id: 5,
        user_id: 5,
        task_id: 5,
        comments: "Reviewed the final test results.",
        timestamp: "2024-01-25T10:00:00Z"
    },
    {
        timestamp_id: 26,
        milestone_id: 6,
        user_id: 6,
        task_id: 6,
        comments: "Merged the final changes.",
        timestamp: "2024-01-26T10:00:00Z"
    },
    {
        timestamp_id: 27,
        milestone_id: 7,
        user_id: 7,
        task_id: 7,
        comments: "Closed the project.",
        timestamp: "2024-01-27T10:00:00Z"
    },
    {
        timestamp_id: 28,
        milestone_id: 8,
        user_id: 8,
        task_id: 8,
        comments: "Started working on the new project.",
        timestamp: "2024-01-28T10:00:00Z"
    },
    {
        timestamp_id: 29,
        milestone_id: 9,
        user_id: 9,
        task_id: 9,
        comments: "Completed the project review.",
        timestamp: "2024-01-29T10:00:00Z"
    },
    {
        timestamp_id: 30,
        milestone_id: 10,
        user_id: 10,
        task_id: 10,
        comments: "Started working on the new task.",
        timestamp: "2024-01-30T10:00:00Z"
    }
]
