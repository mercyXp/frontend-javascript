
#  Project Tasks 

This directory contains TypeScript-based learning tasks and configurations meant for students following the ALX Frontend JavaScript curriculum.

It includes custom configurations and exercises to help you learn how to configure TypeScript, work with interfaces, namespaces, classes, ambient declarations, type predicates, and more.

---

## 🔧 Configuration Files

The following files are shared across tasks for compilation, linting, and bundling:

- `package.json`: Defines project dependencies, scripts, and metadata.
- `.eslintrc.js`: ESLint configuration using `@typescript-eslint`.
- `tsconfig.json`: TypeScript compiler configuration.
- `webpack.config.js`: Bundler setup with Webpack, HTML plugin, and TypeScript loader.

---

## 🗂 Directory Structure

```

0x04-TypeScript/
│
├── task\_0/         # Interfaces and rendering with Vanilla JS
├── task\_1/         # Advanced interfaces, classes, functions
├── task\_2/         # Employee types, conditional logic
├── task\_3/         # Ambient declaration files
├── task\_4/         # Namespaces, class extension & merging
├── task\_5/         # Nominal typing with branding

````

---

## ✅ Tasks Overview

### 0. Student Interface and Table Renderer

**Directory**: `task_0`

- Create `Student` interface: `firstName`, `lastName`, `age`, `location`
- Create two student objects and store in `studentsList` array
- Render a table with student first names and locations using Vanilla JS
- TypeScript and Webpack should compile without error

---

### 1. Teacher Interface

**Directory**: `task_1`

- Create `Teacher` interface with the following:
  - Readonly `firstName`, `lastName`
  - Required `fullTimeEmployee`, `location`
  - Optional `yearsOfExperience`
  - Allow dynamic additional properties (e.g., `contract`)
- Example object usage provided.

---

### 2. Directors Interface

**Directory**: `task_1`

- Extend the `Teacher` interface to create a `Directors` interface
- Add `numberOfReports` (number)
- Validate that the object structure is correct via console logging

---

### 3. printTeacher Function

**Directory**: `task_1`

- Create a function `printTeacher(firstName, lastName)` that returns `J. Doe`
- Define an interface `printTeacherFunction` for this function

---

### 4. StudentClass

**Directory**: `task_1`

- Create `StudentClass` with:
  - Constructor: `firstName`, `lastName`
  - Method: `workOnHomework()` → "Currently working"
  - Method: `displayName()` → returns `firstName`
- Define class and constructor interfaces

---

### 5. Director & Teacher Interfaces and Factory Function

**Directory**: `task_2`

- Define `DirectorInterface` and `TeacherInterface` with specific methods
- Implement `Director` and `Teacher` classes
- Create a function `createEmployee(salary)` to return appropriate instance based on salary amount

---

### 6. Employee Function Logic

**Directory**: `task_2`

- Write `isDirector()` function (type predicate)
- Write `executeWork()` to call correct task method based on employee type

---

### 7. String Literal Types

**Directory**: `task_2`

- Create string literal type `Subjects = "Math" | "History"`
- Implement function `teachClass(todayClass: Subjects)` that returns a teaching message

---

### 8. Ambient Namespaces with CRUD

**Directory**: `task_3`

- Define types in `interface.ts`: `RowID`, `RowElement`
- Use ambient declaration file `crud.d.ts` to define types for 3rd-party `crud.js` functions
- In `main.ts`:
  - Insert row, update it with age, and then delete it
- Validate types via IntelliSense

---

### 9. Namespaces & Declaration Merging

**Directory**: `task_4`

- Use the `Subjects` namespace to:
  - Define `Teacher` interface
  - Define `Subject` class with `teacher` attribute and `setTeacher()` method
- Use declaration merging to extend `Teacher` interface with:
  - `experienceTeachingC` in `Cpp.ts`
  - `experienceTeachingJava` in `Java.ts`
  - `experienceTeachingReact` in `React.ts`
- Create classes `Cpp`, `Java`, `React` with:
  - `getRequirements()`
  - `getAvailableTeacher()` methods

---

### 10. Task 4 — Main Entry

**Directory**: `task_4`

- Create constants for subjects: `cpp`, `java`, `react`
- Create teacher `cTeacher` with `experienceTeachingC = 10`
- For each subject, log its name and use the methods to get requirements and teacher availability

---

### 11. Nominal Typing via Branding

**Directory**: `task_5`

- Define two interfaces:
  - `MajorCredits { credits: number & { __brand: "major" } }`
  - `MinorCredits { credits: number & { __brand: "minor" } }`
- Functions:
  - `sumMajorCredits(subject1, subject2): MajorCredits`
  - `sumMinorCredits(subject1, subject2): MinorCredits`

---

## 🛠 Running the Project

Ensure you have Node.js installed.

1. **Install dependencies**:
   ```bash
   npm install
    ```

2. **Start the dev server (for tasks using webpack)**:

   ```bash
   npm run start-dev
   ```

3. **Build the project**:

   ```bash
   npm run build
   ```

4. **Run tests (if any)**:

   ```bash
   npm test
   ```

---

## 💡 Notes

* TypeScript version: `^3.6.4`
* Follows ALX curriculum conventions
* Each task demonstrates a core TypeScript concept
* Config files are consistent across all tasks for easier reuse

---

## 📁 Repository Info

**Repo Name**: `alx-frontend-javascript`
**Directory**: `0x04-TypeScript`
**Author**: *Mercy Munzenzi*

---

## 📚 Resources

* [TypeScript Docs](https://www.typescriptlang.org/docs/)
* [Webpack Docs](https://webpack.js.org/concepts/)
* [Jest Testing Framework](https://jestjs.io/)
* [ESLint for TypeScript](https://typescript-eslint.io/)




