const http = require('http')
const fs = require('fs')
http.createServer(function (req, res) {
    fs.readFile('Demo.html', function (err, data) {
        //Use for reading the file in the computer 
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write(data)
        return res.end()
    });
    fs.appendFile('Boom.txt', 'Heyy Im here !!', function (err) {
        //it create a File and append the given content into the file if it exist it just append the file
        if (err) throw err;
        console.log('saved !!! ')
    })
    //For only append the content 
    fs.appendFile('Boom.txt', 'Heyy Im here !!', function (err) {
        if (err) throw err;
        console.log('saved again !!! ')
    })

    // open the file for writting if it is not exist it create a new one
    fs.open('Boom.txt', 'w', function (err, file) {
        // 'w' for writting content 
        if (err) throw err;
        console.log("heyyyyyyyyy")
    })

    //if replace the file if it exist otherwise it create the file and it is a asynchronous method 

    fs.writeFile('Mango.txt', 'Mango leloo', function (err) {
        if (err) throw err;
        console.log('Mango file created')
    })

    //writeFileSync method this method block all the operation until unless it do not exicute and it is a sync method
    fs.writeFileSync('forwriteFileSync.text', 'Heyyyy There !!!', function () {
        console.log('Has Written !!!!')
    })

    //For deleting files 
    fs.unlink('Demo.html', function (err) {
        if (err) throw err;
        console.log("file deleted")
    })

    //for rename the file 
    fs.rename('YellowMango.txt','Mango.txt', function (err) {
        if (err) throw err;
        console.log('renamedd')
    })
}).listen(1000)
