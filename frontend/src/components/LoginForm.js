import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Modal, Form, Input, Typography, Checkbox } from 'antd';
import { loginFn } from '../services/auth'




const LoginForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const responseFacebook = (response) => {
    console.log(response);
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
  };
  
  const Formul = () => {
    const onFinish = async (values) => {
      await loginFn(values)
      setIsModalVisible(false);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        style={{margin: "0 80px"}}
      >
        <Form.Item
          label="Email"
          name="email"
          
          rules={[
            {
              type: 'email',
              message: 'Ingresa un correo electrónico válido!',
            },
            {
              required: true,
              message: 'Por favor ingresa tu correo electrónico!',
            },
          ]}
        >
          <Input style={{width: "300px"}}/>
        </Form.Item>
  
        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa una contraseña!',
            },
          ]}
          hasFeedback
        >
          <Input.Password style={{width: "300px"}}/>
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Recordarme</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <button className="btn" htmlType="submit" style={{width: "230px"}}>
            Login
          </button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <>
      <p style={{cursor: "pointer"}} type="primary" onClick={showModal}>
        Login
      </p>
      <Modal
        title="Login"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Formul />

        <Typography.Text>
          ----- O logueate con una red social -----
        </Typography.Text>
        <br />
        <br />

        <div>
          <FacebookLogin
          appId="198741351868254"
          fields="name,email,picture"
          data-size="medium" 
          callback={responseFacebook}
          size="small"
        />
        <br />
        <br />


        <GoogleLogin
          clientId="779423123737-7pe82dh5tvckbo7nm0svivitsqj3f72m.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          render={renderProps => (
            <img src="./images/btn_google_signin_light_pressed_web@2x.png" style={{width: "50%", height: "auto"}}/>
          )}
        />
        </div>
      </Modal>
    </>
  );
}

export default LoginForm