import { readFileSync } from 'fs';
import Glob from "glob";
import { parseToObject } from 'hcl2-parser';
import { resolve } from 'path';
(async() => {

    const hcl = Glob.sync("./@packer/**/*.pkr.hcl").reduce((content,path)=>{
        const buffer = readFileSync(resolve(path))
        const str = buffer.toString("utf-8");
        return `${content}\n${str}`;
    },'');
    console.log(hcl);
    
    const data = await parseToObject(hcl);
    console.log(data)
    debugger;
})()