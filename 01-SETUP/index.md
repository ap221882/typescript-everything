#### Anatomy of a project

1.  package.json
    `{
"name": "hello-ts",
"license": "NOLICENSE",
"devDependencies": {
  "typescript": "^4.3.2"
},
"scripts": {
  "dev": "tsc(compiles) --watch(like nodemon) --preserveWatchOutput(preserves output in the console)"
}
}`

2.  tsconfig.json
    -- By default tsc will put the .js(compiled) files just beside the .ts files
    `{
  "compilerOptions": {
    "outDir": "dist", // where to put the TS files
    "target": "ES3" // which level of JS support to target - compiles to this level
  },
  "include": ["src"] // which files to compile
}`

###### ts configs can be specified on terminal too, e.g., tsc --outDir dist
