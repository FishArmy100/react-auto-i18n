const { exec } = require('child_process')
const path = require('path')

const python_dir = path.resolve(__dirname, '../../python')
const requirements = path.join(python_dir, 'requirements.txt')

const cmd = `pip install -r "${requirements}" || true`;

exec(cmd, (err, stdout, _) => {
    if (err)
    {
        console.warn("Warning: Failed to install Python dependencies. Make sure Python and Pip are installed.")
    }
    else 
    {
        console.log(stdout)
    }
})