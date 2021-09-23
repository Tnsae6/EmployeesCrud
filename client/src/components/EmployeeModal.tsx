import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect, useDispatch } from 'react-redux';
import { addemp } from '../redux/actions/employeeActions';
import { ITarget, IEmpReduxProps } from '../types/interface';

const EmployeeModal = () => {

    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [birthday, setbirthday] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');

    const handleToggle = () => setModal(!modal);
    const handleChangeName = (e: ITarget) => setName(e.target.value);
    const handleChangeBirth = (e: ITarget) => setbirthday(e.target.value);
    const handleChangeGender = (e: ITarget) => setGender(e.target.value);
    const handleChangeSalary = (e: ITarget) => setSalary(e.target.value);

    const handleOnSubmit = (e: any) => {

        e.preventDefault();
        const newEmployee = {
            name,
            birthday,
            gender,
            salary
        }
        if (newEmployee.name !== "" &&
            newEmployee.birthday !== "" &&
            newEmployee.gender !== "" && newEmployee.salary !== "") {

            dispatch(addemp(newEmployee));
        }
        handleToggle(); // close modal
    }

    return (
        <div>
            <Button
                color="dark"
                style={{ marginBottom: '2rem' }}
                onClick={handleToggle}
            >
                Add Employee
            </Button>
            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>Employee form</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleOnSubmit} id = "empForm">
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
                                placeholder="21/01/2020"
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
                                Add Employee</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}
const mapStateToProps = (state: IEmpReduxProps) => ({
    emp: state.emp
});
// const mapDispatchToProps = {
//     addemp
// };
export default connect(mapStateToProps)(EmployeeModal);
