
npm install -g typescript //To install typescript

There are 2 ways to run your project:
tsc App.ts  /// compile
node App.js // to run

OR

npm install --save-dev typescript
npx ts-node App.ts



tsconfig.json#
Typically the first step in any new TypeScript project is to add a tsconfig.json file.
A tsconfig.json file defines the TypeScript project settings, such as the compiler options and the files that should be included.
To do this, open up the folder where you want to store your source and add a new file named tsconfig.json.
Once in this file, IntelliSense (Ctrl+Space) will help you along the way.