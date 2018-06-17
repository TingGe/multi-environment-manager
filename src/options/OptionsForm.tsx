import { Button, Form, Input, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as React from "react";
import Footer from "../layout/Footer";
import "./OptionsForm.scss";

const FormItem = Form.Item;

class OptionsForm extends React.Component<FormComponentProps, any> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      localStorage.setItem("source_url", values.source_url);
      message.success(chrome.i18n.getMessage("saved"));
    });
  };
  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <div className="main-container">
          <header>
            <h1>
              <img src="./icon48.png" alt={chrome.i18n.getMessage("name")} />
              <br />
              {chrome.i18n.getMessage("subTitle")}
            </h1>
          </header>
          <Form onSubmit={this.handleSubmit}>
            <FormItem label={chrome.i18n.getMessage("sourceUrlLabel")}>
              {getFieldDecorator("source_url", {
                initialValue: localStorage.getItem("source_url") || "",
                rules: [
                  {
                    type: "url",
                    message: chrome.i18n.getMessage("isUrlMessage")
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                {chrome.i18n.getMessage("ok")}
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                {chrome.i18n.getMessage("reset")}
              </Button>
            </FormItem>
          </Form>
        </div>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default Form.create()(OptionsForm);
