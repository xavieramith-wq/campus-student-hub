# campus-student-hub-team-2

# Campus Student Hub

## Project Overview

Campus Student Hub is a simple web application developed as part of a collaborative Git and GitHub exercise. The application displays student information and provides an interactive profile section.

The main purpose of this project is to demonstrate how multiple developers can work together on the same project using Git and GitHub without overwriting each other's changes.

## Technologies Used

- HTML5 – Structure of the web page
- CSS3 – Styling and layout
- JavaScript – Interactive functionality
- Git – Version control
- GitHub – Remote repository and collaboration
- Visual Studio Code – Development environment

## Project Features

- Student profile display
- Student name, register number, and programme information
- View Profile button
- Dynamic student details using JavaScript
- Contact information section
- Responsive and simple user interface

## Project Structure

```text
campus-student-hub/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Team Roles

### Student 1 – Team Lead / Developer

- Created and configured the GitHub repository
- Created the initial web application
- Managed the main branch
- Integrated team members' changes
- Reviewed and merged Pull Requests
- Managed merge conflict resolution

### Student 2 – UI Developer

- Improved the HTML structure
- Enhanced the CSS design
- Worked on the user interface
- Used the `feature/ui` branch

### Student 3 – JavaScript Developer

- Added JavaScript functionality
- Improved the View Profile feature
- Worked on the `feature/javascript` branch

## Git Branches

The project uses separate branches so that developers can work independently.

```text
main
│
├── feature/ui
├── feature/javascript
├── feature/contact
├── feature/student-name
└── feature/app-title
```

### Branch Purpose

- `main` – Stable and integrated version of the project
- `feature/ui` – UI and CSS improvements
- `feature/javascript` – JavaScript functionality
- `feature/contact` – Contact information
- `feature/student-name` – Student heading changes
- `feature/app-title` – Application title changes

## Collaborative Git Workflow

The team follows this basic workflow:

```text
Clone Repository
       ↓
Create Feature Branch
       ↓
Make Changes
       ↓
git add
       ↓
git commit
       ↓
git push
       ↓
Create Pull Request
       ↓
Review Pull Request
       ↓
Merge into main
       ↓
Pull Latest Changes
```

## Important Git Commands

```bash
git clone <repository-url>
git branch
git checkout -b feature/branch-name
git add .
git commit -m "Meaningful commit message"
git push origin feature/branch-name
git pull origin main
```

## Pull Requests

Each developer works on a separate feature branch and creates a Pull Request to merge their changes into the `main` branch.

Pull Requests are reviewed before merging to ensure that the changes are correct and do not negatively affect the existing application.

## Merge Conflict Resolution

A merge conflict was intentionally created by modifying the same heading in two different branches.

The conflict was resolved manually by combining the required changes into a single heading:

```html
<h1>Student Management Center - MCA Portal</h1>
```

After resolving the conflict, the corrected file was committed and pushed to GitHub.

## Collaboration Practices

To avoid overwriting another developer's work:

- Each developer uses a separate feature branch.
- Developers pull the latest changes before starting new work.
- Changes are committed with meaningful messages.
- Developers push only their own feature branches.
- Pull Requests are reviewed before merging.
- The `main` branch is used for the integrated project.

## Learning Outcomes

Through this project, the team demonstrated:

1. Local Git configuration
2. GitHub repository creation and cloning
3. Branch creation and management
4. Meaningful commits
5. Pushing branches to GitHub
6. Pull Request creation and review
7. Branch merging
8. Intentional merge conflict creation and resolution
9. Collaborative development without overwriting changes
10. Understanding of a basic collaborative Git workflow

## Conclusion

Campus Student Hub demonstrates a basic collaborative software development workflow using Git, GitHub, and Visual Studio Code. The project shows how developers can work independently using feature branches and safely integrate their work through Pull Requests, reviews, merges, and conflict resolution.
