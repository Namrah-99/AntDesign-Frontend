import React from "react";

import { Row, Col } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { Grid, InputAdornment, IconButton } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
const { TextArea } = Input;

const items = [
  {
    key: "1",
    icon: <i className="fas fa-chart-pie"></i>,
    title: "High Performance",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "2",
    icon: <i className="fas fa-desktop"></i>,
    title: "Flat Design",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "3",
    icon: <i className="fas fa-database"></i>,
    title: "Simplified Workflow",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
];

function AppTry() {
  return (
    <div id="try" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Try Us</h2>
          <p>dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            necessitatibus officiis repudiandae est deserunt delectus dolorem
            iure porro distinctio fuga, nostrum doloremque. Facilis porro in
            laborum dolor amet ratione hic? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Magnam aut a porro, adipisci quidem
            sint enim pariatur ducimus, saepe voluptatibus inventore commodi!
            Quis, explicabo molestias libero tenetur temporibus perspiciatis
            deserunt.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="container-fluid">
        <div id="contact" className="block contactBlock">
          <div className="container-fluid">
            <div className="titleHolder">
              <h2>Form Fields Try</h2>
              <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Please enter your full name!",
                  },
                ]}
              >
                <Input placeholder="Full Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input placeholder="Email Address" />
              </Form.Item>
              <Form.Item name="telephone">
                <Input placeholder="Telephone" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password placeholder="input password" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  placeholder="input password"
                  name="password"
                  //   onChange={handleChange}
                  bordered
                  required
                  size="large"
                  value="passs"
                  type="password"
                  //   InputProps={
                  //     name === "password"
                  //       ? {
                  //           iconRender={(visible) =>
                  //     visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  //   }
                  //         }
                  //       : null
                  //   }
                />
              </Form.Item>
              <Form.Item name="subject">
                <Input placeholder="Subject" />
              </Form.Item>
              <Form.Item name="message">
                <TextArea placeholder="Message" />
              </Form.Item>
              <Form.Item>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  noStyle
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject("Should accept agreement"),
                    },
                  ]}
                >
                  <Checkbox>I agree with terms and conditions.</Checkbox>
                </Form.Item>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppTry;
