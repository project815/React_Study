import { useState } from 'react';
import './App.css';


function Header(props){
  console.log('props', props, props.title)
  return <header>
  <h1><a href='/' onClick={(event)=>{
    event.preventDefault();
    alert('REACT!');
    props.modeHandler();
  }}>{props.title}</a></h1>
 </header>
}

function Nav(props)
{
  // const topics =[
  //   {id : 1, title:'html', body:'html is...'},
  //   {id : 2, title:'css', body:'css is...'},
  //   {id : 3, title:'java', body:'java is...'},
  // ]

  const lis =[];

  for(let i = 0; i < props.topics.length; i++)
  {
    let t = props.topics[i];
    lis.push( <li key={t.id}>
      <a id={t.id}href={'/read' + t.id} onClick={(event)=>{
        event.preventDefault();
        alert(event.target.id);
        props.modeHandler(Number(event.target.id));
      }}>
        {t.title}
        </a>
        </li>);
  }
  return <nav>
    <ol>
    {lis}
    {/* {topics.map(t =>(
      <li key={t.id}>
        <a href={'read' + t.id}>{t.title}</a>
      </li>
    ))} */}
    </ol>
 </nav>
}

// function Article(props)
// {

// }

function Create(props)
{
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.title.value;
      props.onCreate(title, body);
    }}>
      <p><input type='text' name='title' placeholder='title'></input></p>
      <p><textarea name='body' placeholder='body'></textarea></p>
      <p><input type='submit' value='Create'></input></p>
      
    </form>
  </article>
}

const Article = (props) =>{
  return <article>
  <h2>{props.title}</h2>
  {props.body}
 </article>
}
function Update(props)
{
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
  <h2>Update</h2>
  <form onSubmit={event=>{
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    props.onUpdate(title, body);
  }}>
    <p><input type='text' name='title' placeholder='title' value={title} onChange={(event)=>{
      setTitle(event.target.value)}}></input></p>
    <p><textarea name='body' placeholder='body' value={body} onChange={(event) =>{
      setBody(event.target.value);
    }} ></textarea></p>
    <p><input type='submit' value='Update'></input></p>
  </form>
</article>
}

function App() {
  const [topics, setTopic] = useState([
    {id : 1, title:'html', body:'html is...'},
    {id : 2, title:'css', body:'css is...'},
    {id : 3, title:'java', body:'java is...'},
  ]);
  const [mode, setMode] = useState('WEB');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  let content = null;
  let contextControl = null;

  if(mode == 'WEB')
  {
    content = <Article title='welcome' body ='Hello, React'></Article>
  }
  else if(mode == 'READ')
  {
    let title, body = null;
    for(let i = 0; i < topics.length; i++)
    {
      console.log(id);
      if(topics[i].id === id)
      {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body ={body}></Article>
    contextControl = <>
    <li><a href={'/Update/'+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>UPDATE</a></li>
    <li><input type='button' value="Delete" onClick={()=>{
      const newTopics = [];
      for(let i = 0; i < topics.length;i++)
      {
        if(topics[i].id !== id)
        {
          newTopics.push(topics[i]);
        }
      }
      setTopic(newTopics);
      setMode('WEB');
    }}></input>

    </li>
    </>
  }else if(mode === 'CREATE')
  {
    content = <Create onCreate={(title, body)=>{
      console.log(title, body);
      const netTopic = {id:nextId, title:title, body:body};
      // const newTopics = [...topics];
      // newTopics.push(netTopic);
      // setTopic(newTopics);

      setTopic((pres)=>{
        return [...pres, netTopic]
      })
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }
  else if( mode === 'UPDATE')
  {
    let title, body = null;
    for(let i = 0; i < topics.length; i++)
    {
      console.log(id);
      if(topics[i].id === id)
      {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content= <Update title={title} body={body} onUpdate={(title, body)=>{
      
      const newTopics = [...topics];
      const UpdatedTopic = {id: id, title:title, body: body}
      for(let i = 0; i < newTopics.length; i++)
      {
        if(newTopics[i].id === UpdatedTopic.id)
        {
          newTopics[i] = UpdatedTopic;
          break;
        }
      }
      setTopic(newTopics);
      setMode('READ');
    }}></Update>
  }
  return (
    <div className="App">
      <Header title={'REACT'} modeHandler={()=>setMode('WEB')}></Header>
      <Nav topics={topics} modeHandler={(_id)=>
        {
          setMode('READ');
          setId(_id);
          }}></Nav>
      {content}
      <ul>
        <li><a href='/create' onClick={(event)=>{
          event.preventDefault();
          setMode('CREATE');
        }}>CREATE</a></li>
        {contextControl}
    
      </ul>
    </div>
  );
}

export default App;
