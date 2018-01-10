import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(id, text) {
        return {
            type: EDIT_COMMENT,
            text,
            id
        }
}

function removeComment(id){
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function opinionComment(id, text){
    if (text='up')
    {
        return {
            type: THUMB_UP_COMMENT,
            id,
            comment_image: 'lapka w górę'
        }
    }

    if (text='down'){
        return {
            type: THUMB_DOWN_COMMENT,
            id,
            comment_image: 'lapka w dół'
        }
    }
}

dispatch(addComment('nowy komentarz!'));
dispatch(editComment('20','wyedytowany komentarz!'));
dispatch(removeComment('20'));
dispatch(opinionComment('20', 'up'));