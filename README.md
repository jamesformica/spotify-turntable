## How to deploy an update

1. run `yarn build` to generate the `dist` folder with compiled js/css/images/html/markdown/etc..
2. go to the actual `jamesformica.github.io` repository and delete everything in there **EXCEPT** the `CNAME` file
3. copy the contents of the `dist` folder into the actual repo
4. push your changes!
5. Done