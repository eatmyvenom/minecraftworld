module.exports = (filename, memory = 1024) => {
    const cp = require('child_process');
    return cp.spawn('java', [`-Xmx${memory}M`, `-Xms${memory}M`, '-jar', filename, 'nogui']);
}