# Modal · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础使用

```jsx
function ModalDemo() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Button type='secondary' onClick={() => setVisible(true)}>打开对话框</Button>
      <Modal
        visible={visible}
        title='对话框标题'
        okText='确认'
        cancelText='取消'
        onCancel={() => setVisible(false)}
      >
        <p>KDesign是一个适应性强的指南、组件和工具系统，支持用户界面设计的最佳实践。在开源代码的支持下，KDesign 简化了设计人员和开发人员之间的协作，并帮助团队快速构建精美的产品。</p>
        <p>KDesign 提供组件和工具来帮助设计与开发更高效的工作，创建轻松、美观的办公体验</p>
      </Modal>
    </div>
  )
}

```

## 2. 内容区滚动

```jsx
function ModalDemo() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Button type='secondary' onClick={() => setVisible(true)}>打开对话框</Button>
      <Modal
        visible={visible}
        title='对话框标题'
        okText='确认'
        cancelText='取消'
        onCancel={() => setVisible(false)}
        enableScrollOnOverflow={true}
      >
        <p>KDesign是一个适应性强的指南、组件和工具系统，支持用户界面设计的最佳实践。在开源代码的支持下，KDesign 简化了设计人员和开发人员之间的协作，并帮助团队快速构建精美的产品。</p>
        <p>KDesign 提供组件和工具来帮助设计与开发更高效的工作，创建轻松、美观的办公体验</p>
      </Modal>
    </div>
  )
}

```

## 3. 不同尺寸

```jsx
function ModalDemo() {
  const [visible, setVisible] = useState(false)
  const [modalSize, setModalSize] = useState('large')

  return (
    <div className='mr-8'>
      <Button type='secondary' onClick={() =>{setModalSize('small'); setVisible(true)}}>small</Button>
      <Button type='secondary' onClick={() =>{setModalSize('medium'); setVisible(true)}}>medium</Button>
      <Button type='secondary' onClick={() =>{setModalSize('large'); setVisible(true)}}>large</Button>
      <Modal
        visible={visible}
        title='让金山办公的产品更具凝聚力'
        okText='确认'
        cancelText='取消'
        size={modalSize}
        onCancel={() => setVisible(false)}
      >
        <p>KDesign是一个适应性强的指南、组件和工具系统，支持用户界面设计的最佳实践。在开源代码的支持下，KDesign 简化了设计人员和开发人员之间的协作，并帮助团队快速构建精美的产品。</p>
        <p>KDesign 提供组件和工具来帮助设计与开发更高效的工作，创建轻松、美观的办公体验</p>
      </Modal>
    </div>
  )
}

```

## 4. 自定义标题和页脚

```jsx
function ModalDemo() {
  const [visible, setVisible] = useState(false)
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <Button type='secondary' onClick={() => setVisible(true)}>自定义标题和页脚</Button>
      <Modal
        visible={visible}
        title={
          <div className='custom-title'>自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题自定义标题</div>
        }
        okText='确认'
        cancelText='取消'
        onCancel={() => setVisible(false)}
        footer={
          <>
            <Checkbox checked={checked}>复选框</Checkbox>
            <div style={{flex: 1, textAlign: 'right'}}><Button type='primary'>知道了</Button></div>
          </>
        }
      >
         <p>KDesign 提供组件和工具来帮助设计与开发更高效的工作，创建轻松、美观的办公体验</p>
      </Modal>
    </div>
  )
}

```

## 5. 自定义按钮属性

```jsx
function ModalDemo() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Button type='secondary' onClick={() => setVisible(true)}>自定义按钮属性</Button>
      <Modal
        visible={visible}
        title='这是标题'
        okText='确认'
        cancelText='取消'
        onCancel={() => setVisible(false)}
        okButtonProps={{disabled: true}}
      >
         <p>KDesign 提供组件和工具来帮助设计与开发更高效的工作，创建轻松、美观的办公体验</p>
      </Modal>
    </div>
  )
}

```

## 6. 自定义弹窗位置

```jsx
function ModalDemo() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Button type='secondary' onClick={() => setVisible(true)}>自定义弹窗位置</Button>
      <Modal
        visible={visible}
        title='这是标题'
        position={{
          top: 20
        }}
        okText='确认'
        cancelText='取消'
        onCancel={() => setVisible(false)}
      >
         <p>KDesign 提供组件和工具来帮助设计与开发更高效的工作，创建轻松、美观的办公体验</p>
      </Modal>
    </div>
  )
}

```

## 7. 可拖拽弹窗
```jsx
function ModalDemo() {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <Button type='secondary' onClick={() => setVisible(true)}>可拖拽弹窗</Button>
            <Modal
                visible={visible}
                title='对话框标题'
                okText='确认'
                cancelText='取消'
                draggable={true}
                size={'small'}
                onCancel={() => setVisible(false)}
            >
                <p>KDesign是一个适应性强的指南、组件和工具系统，支持用户界面设计的最佳实践。在开源代码的支持下，KDesign 简化了设计人员和开发人员之间的协作，并帮助团队快速构建精美的产品。</p>
                <p>KDesign 提供组件和工具来帮助设计与开发更高效的工作，创建轻松、美观的办公体验</p>
            </Modal>
        </div>
    )
}
```


## 8. 命令式调用

```jsx

function ModalDemo() {
  const [content] = useState('KDesign 提供组件和工具来帮助设计与开发更高效的工作，创建轻松、美观的办公体验。')
  const confirm = () => {
    Modal.confirm({
      title: '这是confirm弹窗',
      okText: '确认',
      cancelText: '取消',
      content: content,
      enableScrollOnOverflow: true,
      enableI18nZoom: true
    })
  }

  const info = () => {
    Modal.info({
      title: '这是info弹窗',
      okText: '我知道了',
      content: content
    })
  }

  const success = () => {
    Modal.success({
      title: '这是success弹窗',
      okText: '我知道了',
      content: content
    })
  }

  const error = () => {
    Modal.error({
      title: '这是error弹窗',
      okText: '我知道了',
      content: content
    })
  }

  const warning = () => {
    Modal.warning({
      title: '这是warning弹窗',
      okText: '我知道了',
      content: content
    })
  }

  return (
    <div className='mr-8'>
      <Button type='secondary' onClick={confirm}>Confirm</Button>
      <Button type='secondary' onClick={info}>Info</Button>
      <Button type='secondary' onClick={success}>Success</Button>
      <Button type='secondary' onClick={error}>Error</Button>
      <Button type='secondary' onClick={warning}>Warning</Button>
    </div>
  )
}

```

## 9. 多语言缩放
> 👌`kd-modal`DOM节点内联的`width`属性会进行比例缩放，具体缩放比例可查看页面底部的参数

```jsx
function ModalDemo() {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Button type='secondary' onClick={() => setVisible(true)}>打开对话框</Button>
      <Modal
        visible={visible}
        title='对话框标题'
        okText='确认'
        cancelText='取消'
        onCancel={() => setVisible(false)}
        enableI18nZoom={true}
      >
        <p>KDesign是一个适应性强的指南、组件和工具系统，支持用户界面设计的最佳实践。在开源代码的支持下，KDesign 简化了设计人员和开发人员之间的协作，并帮助团队快速构建精美的产品。</p>
        <p>KDesign 提供组件和工具来帮助设计与开发更高效的工作，创建轻松、美观的办公体验</p>
      </Modal>
    </div>
  )
}

```
