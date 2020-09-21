
   
    function returnIndex() {
        let massiv = [ { id: 1, name: 'Test 1', email: 'test@tst.com'}, {id: 2, name: 'Test 2', email: 'test3333@test.com'}];
        for (let index = 0; index < massiv.length; index++) {
            return (massiv[index].email=="test@tst.com")? index:"not found";
        }

    }
    this.returnIndex();