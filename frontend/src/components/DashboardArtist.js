import React, {useState, useEffect} from 'react'
import { createCourseFn, editCourseFn, deleteCourseFn, getMyCoursesFn, getOneCourseFn, addClassFn, editClassFn, deleteClassFn } from '../services/courses'
import {Row, Col, Typography, Divider, Button, Modal, Form, Input, DatePicker } from 'antd'
import { useContextInfo } from '../hooks/context'
const { RangePicker } = DatePicker;

const DashboardArtist = () => {
    const { user } = useContextInfo()
    const [courses, setCourses] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModal2Visible, setIsModal2Visible] = useState(false);
    const [isModal3Visible, setIsModal3Visible] = useState(false);
    const [editCourse, setEditCourse] = useState(null)
    const [courseToBeEdited, setCourseToBeEdited] = useState(null)
    const [form] = Form.useForm();

    useEffect(() => {
        async function setMyCourses() {
            const {data} = await getMyCoursesFn()
            setCourses(data)
        }
        setMyCourses()
    }, [user, isModalVisible, isModal2Visible, isModal3Visible])

    useEffect(() => {
        async function setCourseToEdit() {
            const {data} = await getOneCourseFn(editCourse)
            setCourseToBeEdited(data)
        }
        setCourseToEdit()
    }, [isModal2Visible, isModal3Visible, editCourse])

    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
      };
      const tailLayout = {
        wrapperCol: { offset: 0, span: 24 },
      };

    const onFinish = async (values) => {
        const date = [values.date[0].toDate(), values.date[1].toDate()]
        await createCourseFn({name: values.name, description: values.description, date})
        setIsModalVisible(false)
    }

    const onFinish2 = async (values) => {
        const courseId = courseToBeEdited._id
        let date
        values.date ? date = [values.date[0].toDate(), values.date[1].toDate()] : date = courseToBeEdited.date
        await editCourseFn(courseId, {name: values.name, description: values.description, date})
        setIsModal2Visible(false)
        setCourseToBeEdited(null)
        setEditCourse(null)
    }

    const deleteCourse = async () => {
        const id = courseToBeEdited._id
        await deleteCourseFn(id)
        setIsModal3Visible(false)
        setCourseToBeEdited(null)
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };


    const showModal = () => {
        setIsModalVisible(true);
    };

    const showModal2 = () => {
        setIsModal2Visible(true);
    };
    
    const showModal3 = () => {
        setIsModal3Visible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setIsModal2Visible(false);
        setIsModal3Visible(false);
        setCourseToBeEdited(null)
        setEditCourse(null)
    };

    return user && (
        <div>
            <Row gutter={[16, 16]}>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 4, offset: 2 }}>
                    <div style={{width: "100px", height: "100px", margin: "0 auto", borderRadius: "50%", overflow: "hidden"}}>
                        <img style={{height: "100%", objectFit: "cover"}} src={user.image} alt=""/>
                    </div>                    
                </Col>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 4, offset:0 }}>
                    <Typography.Title level={3}>{user.username}</Typography.Title>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 4, offset:6 }}>
                    {user.role === "artist" && <Button onClick={showModal}>Agregar un curso</Button>}
                </Col>
            </Row>

            <Divider><Typography.Title level={3}>Cursos</Typography.Title></Divider>
             
            {courses && courses.map((course) => <Row gutter={[16, 16]}>

                <Col offset={2} span={4}>
                    <i onClick={() => {
                        setEditCourse(course._id)
                        showModal2()
                    } } style={{cursor: "pointer", position: "absolute", top: "20px", right: "-40px", zIndex: "5"}} class="far fa-edit"></i>
                    <i onClick={() => {
                        setEditCourse(course._id)
                        showModal3()
                    } } style={{cursor: "pointer", position: "absolute", top: "20px", right: "-80px", color: "red", zIndex: "5"}} class="far fa-trash-alt"></i>
                   
                    <Typography.Title level={5}>{course.name}</Typography.Title>
                    {course.date && <Typography.Text>Del: {course.date[0]} al {course.date[1]}</Typography.Text>}<br/>
                    <Typography.Text>{course.description}</Typography.Text>
                </Col>

                <Col offset={2} span={16}>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Row>
                                <Col span={12}>
                                    <Typography.Title level={5}>Clase 1</Typography.Title>
                                    <Typography.Text>Descripcion</Typography.Text>
                                </Col>

                                <Col span={4}>
                                <Button>Clase</Button>
                                </Col>
                                
                                <Col span={4}>
                                    <a target="_blank" href="https://docs.google.com/presentation/d/1K2CRicqER3cuYwphjJE7aFGSGw75PlmgKt6vcngVjhY/edit#slide=id.gb09b282031_0_1"><Button>Diapositivas</Button></a>
                                </Col>

                                <Col span={4}>
                                    <Button>Material</Button>
                                </Col>
                            </Row>
                            <Divider />
                        </Col>

                    </Row>
                </Col>

                <Divider />
                </Row>)}


                <Modal
                style={{ top: 20 }}
                title="Agregar un curso"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                >

                <Form
                    {...layout}
                    form={form}
                    name="addCourse"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    style={{margin: "0 80px", fontFamily: "Roboto"}}
                    >
                    <Form.Item
                        label="Nombre del curso"
                        name="name"
                    >
                        <Input/>
                    </Form.Item>
                    
                    <Form.Item
                        label="Descripción"
                        name="description"
                    >
                        <Input.TextArea rows={6} />
                    </Form.Item>

                    <Form.Item
                        label="Fechas de inicio y final"
                        name="date"
                    >
                        <RangePicker />
                    </Form.Item>                    

                    <Form.Item {...tailLayout}>
                        <button className="btn" htmlType="submit" style={{width: "230px"}}>
                        Agregar
                        </button>
                    </Form.Item>
                    </Form>

                </Modal>

                <Modal
                style={{ top: 20 }}
                title="Editar trabajo"
                visible={isModal2Visible}
                onCancel={handleCancel}
                footer={null}
            >
            {courseToBeEdited &&
                <Form
                    {...layout}
                    name="editCourse"
                    initialValues={{ remember: true }}
                    onFinish={onFinish2}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    style={{margin: "0 80px", fontFamily: "Roboto"}}
                    >
                     <Form.Item
                        label="Nombre del curso"
                        name="name"
                        initialValue={courseToBeEdited.name}
                    >
                        <Input/>
                    </Form.Item>
                    
                    <Form.Item
                        label="Descripción"
                        name="description"
                        initialValue={courseToBeEdited.description}
                    >
                        <Input.TextArea rows={6} />
                    </Form.Item>

                    <Form.Item
                        label="Fechas de inicio y final"
                        name="date"
                    >
                        <RangePicker />
                    </Form.Item>
                
                    <Form.Item {...tailLayout}>
                        <button className="btn" htmlType="submit" style={{width: "230px"}}>
                        Guardar cambios
                        </button>
                    </Form.Item>
                    </Form>}

            </Modal>

            <Modal
                style={{ top: 20 }}
                title="Borrar curso"
                visible={isModal3Visible}
                onCancel={handleCancel}
                onOk={deleteCourse}
                okText="Borrar"
                cancelText="Cancelar"
                okType="danger primary"
                
            >
            <Typography.Title style={{fontFamily: "Roboto"}} type="danger" level={5}>Estás segura de borrar este curso?</Typography.Title>

            </Modal>
            
        </div>
    )
}

export default DashboardArtist
