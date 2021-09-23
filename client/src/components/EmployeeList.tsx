import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {
    Container,
    ListGroup,
    Modal,
    Table,
    Button,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect, useDispatch } from 'react-redux';
import { getemp, deleteemp, updateemp } from '../redux/actions/employeeActions';
import { IEmpReduxProps, ITarget, IEmpList } from '../types/interface';

const EmployeeList = ({
    emp
}: IEmpList) => {

    useEffect(() => {
        dispatch(getemp());
    }, [getemp]);

    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [birthday, setbirthday] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [updatId, setId] = useState('');

    const handleChangeName = (e: ITarget) => setName(e.target.value);
    const handleChangeBirth = (e: ITarget) => setbirthday(e.target.value);
    const handleChangeGender = (e: ITarget) => setGender(e.target.value);
    const handleChangeSalary = (e: ITarget) => setSalary(e.target.value);
    const handleToggle = () => setModal(modal);

    const handleDeleteEmp = (id: string) => {

        dispatch(deleteemp(id));
    };
    const toggle = () => setModal(!modal);
    const handleUpdateEmp = (id: string) => {
        toggle()
        setId(id)
    }

    const handleOnSubmit = (e: any) => {

        e.preventDefault();
        const updateEmp = {
            _id: updatId,
            name,
            birthday,
            gender,
            salary
        }
        if (updateEmp.name !== "" &&
            updateEmp.birthday !== "" &&
            updateEmp.gender !== "" &&
            updateEmp.salary !== "") {
            dispatch(updateemp(updateEmp));
        }

        toggle()

    }
    const { emps } = emp;

    return (
        <><div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={handleToggle}>Update Employee</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleOnSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="emp"
                                placeholder="Name"
                                onChange={handleChangeName}
                            />
                            <Label for="birthday">Birthday</Label>
                            <Input
                                type="date"
                                name="birthday"
                                id="birthday"
                                placeholder="what is your birthday"
                                onChange={handleChangeBirth}
                            />
                            <Label for="gender">Gender</Label>
                            <Input
                                type="text"
                                name="gender"
                                id="gender"
                                placeholder="Gender"
                                onChange={handleChangeGender}
                            />
                            <Label for="salary">Salary</Label>
                            <Input
                                type="number"
                                name="salary"
                                id="salary"
                                placeholder="Salary"
                                onChange={handleChangeSalary}
                            />
                            <Button color="dark" style={{ marginTop: '2rem' }} block>
                                Update Employee</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
            <Container>
                <ListGroup>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birthday</th>
                                <th>Gender</th>
                                <th>Salary</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {emps.map(({ _id, name, birthday, gender, salary }) => (
                            <tbody>
                                <tr>
                                    
                                    <td>{name}</td>
                                    <td>{birthday}</td>
                                    <td>{gender}</td>
                                    <td>{salary}</td>
                                    <td>
                                    <Button
                                        className=""
                                        color="success"
                                        size="sm"
                                        onClick={() => handleUpdateEmp(_id)}
                                    >
                                        update
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            className="btn"
                                            color="danger"
                                            size="sm"
                                            onClick={() => handleDeleteEmp(_id)}
                                        >
                                            delete
                                        </Button>
                                    </td>
                                   
                                </tr>
                            </tbody>

                        ))}
                    </Table>
                </ListGroup>
            </Container></>
    );
};

const mapStateToProps = (state: IEmpReduxProps) => ({
    emp: state.emp
});

const mapDispatchToProps = {
    getemp,
    deleteemp,
    updateemp
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
