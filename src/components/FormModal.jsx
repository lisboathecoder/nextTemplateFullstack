"use client";

import { Modal, Form, Input, InputNumber } from "antd";

export default function FormModal({
  openModal,
  serie,
  confirmLoading,
  onSubmit,
  onCancel,
}) {
  const [form] = Form.useForm();

  return (
    <Modal
      open={openModal}
      title={serie ? "Editar série" : "Criar nova série"}
      centered
      onOk={() => form.submit()}
      onCancel={onCancel}
      confirmLoading={confirmLoading}
      destroyOnHidden
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={serie}
        onFinish={onSubmit}
      >
        <Form.Item
          name="title"
          label="Título"
          rules={[
            {
              require: true,
              min: 3,
              max: 120,
              message: "Título obrigatório deve ter entre 3 e 120 caractéres",
            },
          ]}
        >
          <Input placeholder="ex: Breaking Bad" />
        </Form.Item>
        <Form.Item
          name="genero"
          label="Gênero"
          rules={[
            {
              require: true,
              message: "Gênero é obrigatório",
            },
          ]}
        >
          <Input placeholder="ex: Ação" />
        </Form.Item>
        <Form.Item
          name="plataforma"
          label="Plataforma"
          rules={[
            {
              require: true,
              message: "Plataforma é obrigatório",
            },
          ]}
        >
          <Input placeholder="ex: Netflix" />
        </Form.Item>
        <Form.Item
          name="numero_temporadas"
          label="Temporadas"
          rules={[
            {
              require: true,
              type: "number",
              message: "Número de temporadas é obrigatório",
            },
          ]}
        >
          <InputNumber placeholder="ex: 5" min={1} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="ano_lancamento"
          label="Ano de lançamento"
          rules={[
            {
              require: true,
              type: "number",
              message: "Ano de lançamento é obrigatório",
            },
          ]}
        >
          <InputNumber
            placeholder="ex: 2008"
            min={1900}
            max={2100}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="imageUrl"
          label="Url da imagem"
          rules={[
            {
              type: "url",
              message: "Deve ser um URL válido",
            },
          ]}
        >
          <Input placeholder="ex: https://codeverse.dev.br/breaking-bad.png" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
