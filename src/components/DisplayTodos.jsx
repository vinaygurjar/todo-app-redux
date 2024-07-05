import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Container, ListGroup, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { connect } from 'react-redux'
import { deleteTodo } from '../Redux/actions/todo'

const DisplayTodos = ({todos, deleteTodo}) => {

  return (
    <Container>
      <Row>
        <Col>
          <Card className='mt-3 shadow-sm'>
            <CardBody>
              <h3>All Todos are here</h3>
              <DisplayCount />
              <ListGroup>
                {
                  todos.map((todo, index) => (
                    <ListGroup.Item key={index}>
                      <h4>{todo.title}</h4>
                      <p>{todo.description}</p>
                      <Button onClick={event=>deleteTodo(todo.id)} variant='danger' size='sm'>
                        Delete
                      </Button>
                    </ListGroup.Item>
                  ))
                }
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps=(state)=>{
  console.log(state.todoReducer);
  return{todos:state.todoReducer}
}

const mapDispatchToProps=(dispatch)=>({
  deleteTodo:(id)=>(dispatch(deleteTodo(id)))
})

export default connect(mapStateToProps, mapDispatchToProps) (DisplayTodos)