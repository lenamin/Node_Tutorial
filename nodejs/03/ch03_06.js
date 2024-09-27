const { exec } = require('child_process');

const cmd = 'find . -name "*.js"'

exec(cmd, (err, stdout, stderr) => {
    if(err) {
        console.error(`error발생 : ${err}`);
        return
    }
    console.log(`stdout: ${stdout}`);
})
