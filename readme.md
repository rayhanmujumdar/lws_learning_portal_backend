# Final_exam_learning_portal_application - Backend server

### Date: 26/7/23

Agenda:

- Functional requirement Analysis
- create A **SRS (software requirement analysis)**
- Choose technology
- setup project

## Requirement Analysis:

## Database analysis:

**create database collection:**

- User → role: student or admin
- videos
- assignment
- quizzes
- AssignementMark
- QuizMark

**Model:**

**user:**

- id → string
- name → string
- email → string
- password → string
- role: enum[” student”, “admin”]

**video:**

- id → string
- title → string
- description → string
- url → string
- views → string
- duration → string
- createdAt → Date

**Assignment:**

- id → string
- title → string
- videoId → Video Object
- totalMark → number

**Quizzes:**

- id → string
- Question → string
- videoId → Video Object
- options
    - id → string
    - option → string
    - isCorrect: Boolean

**AssignmentMark:**

- id → string
- assignmentI_id → Assignment object
- student_id → User Object → role: student
- createdAt: Date
- student_name → string
- title - string
- totalMark → Number
- mark → number
- repo_link → string
- status → string

**QuizMark:**

- id → string
- video_title → string
- video_id → string
- student_name → string
- student_id → string
- totalQuiz →number
- totalCorrect → number
- totalWrong → number
- totalMark → number
- mark→ number

## E**ndPoints:**

**Student:**

- POST/auth/login → public
- POST/auth/register → public
- GET/auth/users → public
- GET/auth/users?email=rayhanmujumdar@gmail.com → public
- GET/videos → private
- GET/video/:id → private
- GET/quizzes?videoId → private
- GET/assignment?videoId → private
- GET/quizMark → private
- POST/quizMark → private
- GET/assignment?videoId → private
- GET/assignmentMark → private
- POST/assignmentMark → private

**Admin:**

- GET/videos → private
- POST/videos → private
- PATCH/videos → private
- DELETE/videos → private
- GET/quiz → private
- POST/quiz → private
- UPDATE/quiz → private
- DELETE/quiz → private
- GET/assignment → private
- POST/assignment → private
- PATCH/assignment→ private
- DELETE/assignment → private
- GET/assignmentMark → private
- PATCH/assignmentMark → private

# Choose technology:

- Node.js
- Express.js
- JWT
- morgan
- Router
- Cors
- dotenv
- jwt
- bcrypt