# TypeScript Tasks

This project focuses on mastering TypeScript in a frontend development environment using interfaces, classes, advanced types, ambient namespaces, declaration merging, and more. Each task includes a description, file structure, and expected behavior. Webpack is used for bundling and TypeScript for static type checking.

---

## 📁 Task 0: Creating an Interface for a Student

**Directory:** `task_0`

### ✅ Objectives:
- Define a `Student` interface with `firstName`, `lastName`, `age`, and `location`.
- Create two student objects and store them in an array.
- Render a table displaying each student's first name and location using Vanilla JS.

### ✅ Requirements:
- Webpack build returns **no type errors**.
- TypeScript used throughout.

### 📄 Files:
- `task_0/js/main.ts`
- `task_0/package.json`
- `task_0/.eslintrc.js`
- `task_0/tsconfig.json`
- `task_0/webpack.config.js`

---

## 📁 Task 1: Let's Build a Teacher Interface

**Directory:** `task_1`

### ✅ Objectives:
- Create a `Teacher` interface with:
  - `firstName`, `lastName` (readonly)
  - `fullTimeEmployee` (required)
  - `yearsOfExperience` (optional)
  - `location` (required)
  - [index signature] for additional props like `contract`
  
### 📄 Files:
- `task_1/js/main.ts`
- `task_1/package.json`
- `task_1/tsconfig.json`
- `task_1/webpack.config.js`

---

## 📁 Task 2: Extending the Teacher Interface

**Directory:** `task_1`

### ✅ Objectives:
- Create an interface `Directors` that extends `Teacher` and adds a `numberOfReports` property.

---

## 📁 Task 3: Printing Teachers

**Directory:** `task_1`

### ✅ Objectives:
- Write a function `printTeacher(firstName, lastName)` that returns `FirstInitial. LastName`.
- Define the function signature using an interface `printTeacherFunction`.

---

## 📁 Task 4: Writing a Class

**Directory:** `task_1`

### ✅ Objectives:
- Create a `StudentClass` class with:
  - Constructor accepting `firstName`, `lastName`
  - `displayName()` returning the first name
  - `workOnHomework()` returning "Currently working"
- Define both class and constructor via interfaces.

---

## 📁 Task 5: Advanced Types - Part 1

**Directory:** `task_2`

### ✅ Objectives:
- Define `DirectorInterface` and `TeacherInterface` with work methods.
- Create `Director` and `Teacher` classes implementing them.
- Write `createEmployee(salary)` function returning an instance based on salary.

### 📄 Files:
- `task_2/js/main.ts`
- `task_2/package.json`
- `task_2/tsconfig.json`
- `task_2/webpack.config.js`

---

## 📁 Task 6: Functions Specific to Employees

**Directory:** `task_2`

### ✅ Objectives:
- Implement `isDirector(employee): employee is Director`
- Implement `executeWork(employee)` to call task-specific methods.

---

## 📁 Task 7: String Literal Types

**Directory:** `task_2`

### ✅ Objectives:
- Create a string literal type `Subjects` allowing only `"Math"` or `"History"`.
- Write `teachClass(todayClass: Subjects)` returning the appropriate teaching string.

---

## 📁 Task 8: Ambient Namespaces

**Directory:** `task_3`

### ✅ Objectives:
- Define `RowID` and `RowElement` in `interface.ts`.
- Create ambient declarations in `crud.d.ts` for `insertRow`, `deleteRow`, `updateRow`.
- Use triple-slash directives in `main.ts` and test functions from `crud.js`.

### 📄 Files:
- `task_3/js/main.ts`
- `task_3/js/interface.ts`
- `task_3/js/crud.d.ts`
- `task_3/js/crud.js`

---

## 📁 Task 9: Namespace & Declaration Merging

**Directory:** `task_4/js/subjects`

### ✅ Objectives:
- Define `Teacher` interface inside `Subjects` namespace.
- Create `Subject`, `Cpp`, `Java`, and `React` classes.
- Use declaration merging to extend interface with experience attributes.

### 📄 Files:
- `task_4/js/subjects/Teacher.ts`
- `task_4/js/subjects/Subject.ts`
- `task_4/js/subjects/Cpp.ts`
- `task_4/js/subjects/Java.ts`
- `task_4/js/subjects/React.ts`
- `task_4/tsconfig.json`
- `task_4/package.json`

---

## 📁 Task 10: Update main.ts for task_4

**Directory:** `task_4/js`

### ✅ Objectives:
- Create and export constants for each subject: `cpp`, `java`, `react`.
- Create a teacher object `cTeacher`.
- For each subject, log:
  - Subject name
  - `getRequirements()` result
  - `getAvailableTeacher()` result

### 📄 Files:
- `task_4/js/main.ts`

---

## 📁 Task 11: Brand Convention & Nominal Typing

**Directory:** `task_5`

### ✅ Objectives:
- Define `MajorCredits` and `MinorCredits` interfaces with branded types.
- Write `sumMajorCredits()` and `sumMinorCredits()` functions to return properly typed values.

### 📄 Files:
- `task_5/js/main.ts`
- `task_5/webpack.config.js`
- `task_5/tsconfig.json`
- `task_5/package.json`

---

## ✅ General Requirements
- All code must compile cleanly with `npm run build`.
- TypeScript must be used for all variable and function declarations.
- Webpack is used for bundling and must report **no type errors**.

---

## 🔗 Repository

**GitHub Repo:** [alx-frontend-javascript](https://github.com/mercyXp/alx-frontend-javascript)

---


