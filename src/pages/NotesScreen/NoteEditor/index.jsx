import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import NotesService from 'services/notes';
	
	const NoteEditor = (props) => {
	 	const [currentContent, setCurrentContent] = useState(props.note.body)
		const [timer, setTimer] = useState(null);


		const updateNote = (content) => {
			const title = content.replace(/(<[^>]+)>/ig, "").slice(0,10);
			props.updateNote(props.note, {'title' : title, 'body' : content})
		}
		
		const handleChange = (content, delta, source) => {
			clearTimeout(timer)
			if(source == 'user'){
			setCurrentContent(content);
			setTimer(setTimeout(() => updateNote(content), 2000))
		}
	}
		
		useEffect(() => {
			setCurrentContent(props.note.body)		
		},[])

	 	const modules = {
			
	 	toolbar: [
	  [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
	  ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
	  [{'list': 'ordered'}, {'list': 'bullet'},
	  {'indent': '-1'}, {'indent': '+1'}],
	   ['link'],
	  ['clean'],
	 ]
		}
	
	 return (	
	 <ReactQuill
	 	value={currentContent}		
		onChange={handleChange}
		modules={modules}		
		/>	   
		)
	}
	
	export default NoteEditor;