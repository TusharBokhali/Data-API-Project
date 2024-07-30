
import './App.css';

function App() {
  let employes = [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@company.com",
      "department": "Engineering",
      "jobTitle": "Software Engineer",
      "phoneNumber": "+15551234567",
      "startDate": "2023-01-01",
      "isActive": true
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@company.com",
      "department": "Marketing",
      "jobTitle": "Marketing Specialist",
      "phoneNumber": "+15551234568",
      "startDate": "2022-11-15",
      "isActive": true
    },
    {
      "id": 3,
      "firstName": "Michael",
      "lastName": "Johnson",
      "email": "michael.johnson@company.com",
      "department": "Human Resources",
      "jobTitle": "HR Manager",
      "phoneNumber": "+15551234569",
      "startDate": "2023-02-20",
      "isActive": true
    },
    {
      "id": 4,
      "firstName": "Emily",
      "lastName": "Brown",
      "email": "emily.brown@company.com",
      "department": "Finance",
      "jobTitle": "Financial Analyst",
      "phoneNumber": "+15551234570",
      "startDate": "2023-04-05",
      "isActive": true
    },
    {
      "id": 5,
      "firstName": "David",
      "lastName": "Wilson",
      "email": "david.wilson@company.com",
      "department": "Sales",
      "jobTitle": "Sales Manager",
      "phoneNumber": "+15551234571",
      "startDate": "2022-09-10",
      "isActive": true
    },
    {
      "id": 6,
      "firstName": "Sarah",
      "lastName": "Garcia",
      "email": "sarah.garcia@company.com",
      "department": "Engineering",
      "jobTitle": "UI/UX Designer",
      "phoneNumber": "+15551234572",
      "startDate": "2023-03-15",
      "isActive": true
    },
    {
      "id": 7,
      "firstName": "Christopher",
      "lastName": "Martinez",
      "email": "christopher.martinez@company.com",
      "department": "Operations",
      "jobTitle": "Operations Manager",
      "phoneNumber": "+15551234573",
      "startDate": "2022-12-28",
      "isActive": true
    },
    {
      "id": 8,
      "firstName": "Jennifer",
      "lastName": "Lopez",
      "email": "jennifer.lopez@company.com",
      "department": "Marketing",
      "jobTitle": "Social Media Specialist",
      "phoneNumber": "+15551234574",
      "startDate": "2023-05-20",
      "isActive": true
    },
    {
      "id": 9,
      "firstName": "James",
      "lastName": "Miller",
      "email": "james.miller@company.com",
      "department": "Human Resources",
      "jobTitle": "Recruiter",
      "phoneNumber": "+15551234575",
      "startDate": "2022-10-18",
      "isActive": true
    },
    {
      "id": 10,
      "firstName": "Michelle",
      "lastName": "Young",
      "email": "michelle.young@company.com",
      "department": "Finance",
      "jobTitle": "Financial Controller",
      "phoneNumber": "+15551234576",
      "startDate": "2023-01-30",
      "isActive": true
    },
    {
      "id": 11,
      "firstName": "Daniel",
      "lastName": "Thompson",
      "email": "daniel.thompson@company.com",
      "department": "Sales",
      "jobTitle": "Sales Representative",
      "phoneNumber": "+15551234577",
      "startDate": "2023-02-12",
      "isActive": true
    },
    {
      "id": 12,
      "firstName": "Amanda",
      "lastName": "Davis",
      "email": "amanda.davis@company.com",
      "department": "Engineering",
      "jobTitle": "Software Developer",
      "phoneNumber": "+15551234578",
      "startDate": "2022-08-25",
      "isActive": true
    },
    {
      "id": 13,
      "firstName": "Kevin",
      "lastName": "Hernandez",
      "email": "kevin.hernandez@company.com",
      "department": "Operations",
      "jobTitle": "Operations Coordinator",
      "phoneNumber": "+15551234579",
      "startDate": "2023-03-10",
      "isActive": true
    },
    {
      "id": 14,
      "firstName": "Stephanie",
      "lastName": "Gonzalez",
      "email": "stephanie.gonzalez@company.com",
      "department": "Marketing",
      "jobTitle": "Marketing Manager",
      "phoneNumber": "+15551234580",
      "startDate": "2022-11-05",
      "isActive": true
    },
    {
      "id": 15,
      "firstName": "Ryan",
      "lastName": "Perez",
      "email": "ryan.perez@company.com",
      "department": "Human Resources",
      "jobTitle": "HR Coordinator",
      "phoneNumber": "+15551234581",
      "startDate": "2023-04-18",
      "isActive": true
    },
    {
      "id": 16,
      "firstName": "Rachel",
      "lastName": "Nguyen",
      "email": "rachel.nguyen@company.com",
      "department": "Finance",
      "jobTitle": "Accountant",
      "phoneNumber": "+15551234582",
      "startDate": "2022-12-03",
      "isActive": true
    },
    {
      "id": 17,
      "firstName": "Jason",
      "lastName": "Robinson",
      "email": "jason.robinson@company.com",
      "department": "Sales",
      "jobTitle": "Sales Analyst",
      "phoneNumber": "+15551234583",
      "startDate": "2023-01-25",
      "isActive": true
    },
    {
      "id": 18,
      "firstName": "Heather",
      "lastName": "Clark",
      "email": "heather.clark@company.com",
      "department": "Engineering",
      "jobTitle": "Systems Engineer",
      "phoneNumber": "+15551234584",
      "startDate": "2023-02-28",
      "isActive": true
    },
    {
      "id": 19,
      "firstName": "Matthew",
      "lastName": "Lewis",
      "email": "matthew.lewis@company.com",
      "department": "Operations",
      "jobTitle": "Operations Analyst",
      "phoneNumber": "+15551234585",
      "startDate": "2022-09-08",
      "isActive": true
    },
    {
      "id": 20,
      "firstName": "Lauren",
      "lastName": "Morris",
      "email": "lauren.morris@company.com",
      "department": "Marketing",
      "jobTitle": "Content Writer",
      "phoneNumber": "+15551234586",
      "startDate": "2023-03-05",
      "isActive": true
    }
  ]
  return (
    <>
    <h1 align='center'>Employes List</h1>
      <table border="1" width="100%" cellSpacing={0}>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>email</th>
          <th>department</th>
          <th>jobTitle</th>
          <th>phoneNumber</th>
          <th>startDate</th>
          <th>isActive</th>
        </tr>
         {
        employes.map(function (element){
          return (<tr>
          <td>{element.id}</td>
          <td>{element.firstName}</td>
          <td>{element.email}</td>
          <td>{element.department}</td>
          <td>{element.jobTitle}</td>
          <td>{element.phoneNumber}</td>
          <td>{element.startDate}</td>
          <td>{element.isActive.toString()}</td>
          </tr>)
        })
      }
      </table>
    </>
  );
}

export default App;
