import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { addTodo } from '../Redux/actions/todo'
import { connect } from 'react-redux'
import { v4 } from 'uuid'

const AddTodo = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        id: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        // Check if title and description are empty
        if (!todo.title.trim() || !todo.description.trim()) {
            alert("Please enter both title and description.")
            return;
        }

        // Add todo in store.
        addTodo({ ...todo, id: v4() })

        // Clear the form
        setTodo({
            title: '',
            description: ''
        })
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Card className='shadow-sm'>
                        <Card.Body>
                            <h3>Add Todo Here !!</h3>
                            <DisplayCount />
                            {/* form */}
                            <Form onSubmit={handleSubmit}>
                                {/* title */}
                                <FormGroup>
                                    <FormLabel>Todo Title</FormLabel>
                                    <FormControl
                                        type='text'
                                        placeholder='enter here'
                                        value={todo.title}
                                        onChange={event => setTodo({ ...todo, title: event.target.value })}
                                    ></FormControl>
                                </FormGroup>
                                {/* description */}
                                <FormGroup className='mt-3'>
                                    <FormLabel>Todo Description</FormLabel>
                                    <FormControl
                                        as={'textarea'}
                                        type='text'
                                        placeholder='enter here'
                                        value={todo.description}
                                        onChange={event => setTodo({ ...todo, description: event.target.value })}
                                    ></FormControl>
                                </FormGroup>

                                <Container className='text-center mt-3'>
                                    <Button type='submit' variant='primary'>
                                        Add Todo
                                    </Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => (dispatch(addTodo(todo)))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
