/**
 * The purpose of this kata is to implement the undoRedo function.
 * This function takes an object and returns an object that has these actions to 
 * be performed on the object passed as a parameter:
 * 
 * set(key, value) Assigns the value to the key. 
 * If the key does not exist, creates it.
 * 
 * get(key) Returns the value associated to the key.
 * 
 * del(key) removes the key from the object.
 * 
 * undo() Undo the last operation (set or del) on the object. 
 * Throws an exception if there is no operation to undo.
 * 
 * redo() Redo the last undo operation (redo is only possible after an undo). 
 * Throws an exception if there is no operation to redo.
 * 
 * After set() or del() are called, there is nothing to redo.
 * 
 * All actions must affect to the object passed to undoRedo(object) function. 
 * So you can not work with a copy of the object.
 * Any set/del after an undo should disallow new undos.
 */

function undoRedo(object) {
    return {
        set: function (key, value) {
            let setKey = function (o) {
                if (o['prevState']) {
                    o['prevState'].push({ ...o });
                } else {
                    o['prevState'] = [{ ...o }]
                }
                o[key] = value;
                return o;
            };
            return setKey(object);
        },
        get: function (key) {
            return object[key];
        },
        del: function (key) {
            if (key === 'prevState') throw new Error('Cannot delete previous state key');

            if (object['prevState']) {
                object['prevState'].push({ ...object });
            } else {
                object['prevState'] = [{ ...object }];
            }
            delete object[key]
        },
        undo: function () {
            if (!object['prevState'] || !object['prevState'].length) {
                throw new Error('Nothing to undo')
            }
            let undone = object['prevState'].pop();
            // Handle set cases
            for (let key in undone) {
                object[key] = undone[key]
            };

            //Handle delete
            for (let key in object) {
                if (!undone[key]) {
                    delete object[key]
                }
            };

            return object
        },
        redo: function () {}
    };
};

let myObj = {};

let unRe = undoRedo(myObj);

unRe.set('first', 'Shake and Bake');
unRe.set('second', 'Slice and Dice');
unRe.set('third', 'Waste of Time');
unRe.del('third');


console.log('RESULT', myObj)