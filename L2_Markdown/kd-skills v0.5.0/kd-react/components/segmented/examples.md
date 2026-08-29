# Segmented · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 组件形式

组件有两种形式，一种是直接使用 `Segmented` 组件，另一种是使用 `Segmented.Controller` 和 `Segmented.Item` 组合使用。

> 简单 options 时，数组元素会被同时当做 name 和 text，以下两种形式等价。

```jsx
function Demo() {
  return (
    <>
      <Segmented options={['文本1', '文本2', '文本3']} />
      <p />
      <Segmented.Controller>
        <Segmented.Item name="文本1" text="文本1" />
        <Segmented.Item name="文本2" text="文本2" />
        <Segmented.Item name="文本3" text="文本3" />
      </Segmented.Controller>
    </>
  );
}
```

## 2. 图标 icon

不同组件形式传入图标的形式不同，`Segmented` 组件直接传入 `Icon` 组件，`Segmented.Item` 组件传入 `icon` 属性。

```jsx
function Demo() {
  return (
    <>
      <Segmented
        options={[
          { icon: <Emojis />, name: 'text-1' },
          { icon: <Emojis />, name: 'text-2' },
          { icon: <Emojis />, name: 'text-3' },
        ]}
      />
      <span style={{ marginRight: '10px' }} />
      <Segmented
        options={[
          { icon: <Emojis />, name: 'text-1', text: '文本1' },
          { icon: <Emojis />, name: 'text-2', text: '文本2' },
          { icon: <Emojis />, name: 'text-3', text: '文本3' },
        ]}
      />

      <p />

      <Segmented.Controller>
        <Segmented.Item icon={<Emojis />} name="text-4" />
        <Segmented.Item icon={<Emojis />} name="text-5" />
        <Segmented.Item icon={<Emojis />} name="text-6" />
      </Segmented.Controller>
      <span style={{ marginRight: '10px' }} />
      <Segmented.Controller>
        <Segmented.Item icon={<Emojis />} name="text-4" text="文本4" />
        <Segmented.Item icon={<Emojis />} name="text-5" text="文本5" />
        <Segmented.Item icon={<Emojis />} name="text-6" text="文本6" />
      </Segmented.Controller>
    </>
  );
}
```

## 3. 尺寸 size

尺寸 `size` 有四种类型：`small`、`medium`、`large`、`x-large`，默认为 `medium`。

```jsx
function Demo() {
  return (
    <>
      <Segmented
        options={[
          '文本1',
          '文本2',
          '超长文本文本本',
          { name: 'item-3', text: '超长图标文本文本', icon: <Emojis /> },
        ]}
        size="small"
      />
      <p />
      <Segmented
        options={[
          '文本1',
          '文本2',
          '超长文本文本本',
          { name: 'item-3', text: '超长图标文本文本', icon: <Emojis /> },
        ]}
        size="medium"
      />
      <p />
      <Segmented
        options={[
          '文本1',
          '文本2',
          '超长文本文本本',
          { name: 'item-3', text: '超长图标文本文本', icon: <Emojis /> },
        ]}
        size="large"
      />
      <p />
      <Segmented
        options={[
          '文本1',
          '文本2',
          '超长文本文本本',
          { name: 'item-3', text: '超长图标文本文本', icon: <Emojis /> },
        ]}
        size="x-large"
      />
      <p />
    </>
  );
}
```

## 4. 多选 multi

```jsx
function Demo() {
  return (
    <>
      <Segmented multi options={['文本1', '文本2', '文本3']} />
      <p />
      <Segmented.Controller multi>
        <Segmented.Item name="文本1" text="文本1" />
        <Segmented.Item name="文本2" text="文本2" />
        <Segmented.Item name="文本3" text="文本3" />
      </Segmented.Controller>
    </>
  );
}
```

## 5. 默认选中 active

```jsx
function Demo() {
  return (
    <>
      单选：
      <Segmented active="文本1" options={['文本1', '文本2', '文本3']} />
      <span style={{ marginRight: '10px' }} />
      <Segmented.Controller active="文本2">
        <Segmented.Item name="文本1" text="文本1" />
        <Segmented.Item name="文本2" text="文本2" />
        <Segmented.Item name="文本3" text="文本3" />
      </Segmented.Controller>
      <p />
      多选：
      <Segmented multi active={['文本1', '文本3']} options={['文本1', '文本2', '文本3', '文本4']} />
      <span style={{ marginRight: '10px' }} />
      <Segmented.Controller multi active={['文本2', '文本4']}>
        <Segmented.Item name="文本1" text="文本1" />
        <Segmented.Item name="文本2" text="文本2" />
        <Segmented.Item name="文本3" text="文本3" />
        <Segmented.Item name="文本4" text="文本4" />
      </Segmented.Controller>
      <p />
    </>
  );
}
```

## 6. 禁用项 disabled

```jsx
function Demo() {
  return (
    <>
      <Segmented options={['文本1', { name: '文本2', text: '文本2', disabled: true }, '文本3']} />
      <p />
      <Segmented.Controller>
        <Segmented.Item name="文本1" text="文本1" />
        <Segmented.Item name="文本2" text="文本2" />
        <Segmented.Item name="文本3" text="文本3" disabled />
      </Segmented.Controller>
    </>
  );
}
```

## 7. 提示工具 tooltip

默认不显示 `tooltip`，配置内容参考 [ITooltipProps](https://kdesign.kdocs.cn/react/components/tooltip#api)

> 不显示 `tooltip` 的几种情况
>
> 1. 未配置 `tooltip`
> 2. `tooltip.visible` 为 `false` 时
> 3. `tooltip.disabled` 为 `true` 时
> 4. `tooltip.title` 为空时

```jsx
function Demo() {
  return (
    <>
      <Segmented
        options={[
          {
            name: '文本1',
            tooltip: { title: '测试文本1 tooltip', placement: 'top' },
          },
          {
            name: '文本2',
            tooltip: { title: '测试文本2 tooltip', visible: false },
          },
          '文本3',
        ]}
      />
      <p />
      <Segmented.Controller>
        <Segmented.Item
          name="文本1"
          text="文本1"
          tooltip={{ title: '测试文本1 tooltip', disabled: true }}
        />
        <Segmented.Item name="文本2" text="文本2" tooltip={{ title: '测试文本2 tooltip' }} />
        <Segmented.Item name="文本3" text="文本3" tooltip={{ title: '测试文本3 tooltip' }} />
      </Segmented.Controller>
    </>
  );
}
```

## 8. 自定义渲染 custom

自定义渲染仅适用于 `Segmented.Controller` 组件形式，通过自定义 `Segmented.Item` 的内容实现。

```jsx
function Demo() {
  function Custom({ active, text }) {
    return <div style={{ color: active ? 'red' : 'green' }}>{text}</div>;
  }
  return (
    <Segmented.Controller>
      <Segmented.Item name="文本1">
        <Custom text="文本1" />
      </Segmented.Item>
      <Segmented.Item name="文本2">
        <Custom text="文本2" />
      </Segmented.Item>
      <Segmented.Item name="文本3">
        <Custom text="文本3" />
      </Segmented.Item>
    </Segmented.Controller>
  );
}
```

## 9. 手动切换 setItemAcitve

```js live
function Demo() {
  // ts useRef<ISegmentedControllerImperative>(null) 可获得类型提示
  const segmentedRef1 = useRef(null);
  const segmentedRef2 = useRef(null);
  function handleActive() {
    segmentedRef1.current.setItemActive('文本1', true);
    segmentedRef2.current.setItemActive('文本2', true);
  }
  return (
    <>
      <Button type="secondary" onClick={handleActive}>
        切换 active
      </Button>
      <p />
      <Segmented ref={segmentedRef1} options={['文本1', '文本2', '文本3']} />
      <p />
      <Segmented.Controller ref={segmentedRef2}>
        <Segmented.Item name="文本1" text="文本1" />
        <Segmented.Item name="文本2" text="文本2" />
        <Segmented.Item name="文本3" text="文本3" />
      </Segmented.Controller>
    </>
  );
}
```

## 10. 受控模式 onBeforeChange

默认情况下控制器为非受控模式，即点击后自动切换选中项；如需要自定义切换逻辑前的操作，可以使用 `onBeforeChange` 事件来控制。

```jsx
function Demo() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [segmentedBeforeChange, setSegmentedBeforeChange] = useState(() => {});

  function onBeforeChange() {
    setDialogVisible(true);
    return new Promise((resolve) => {
      setSegmentedBeforeChange(() => resolve);
    });
  }
  return (
    <>
      <Segmented
        options={[
          { name: '文本1', text: '文本1', onBeforeChange },
          { name: '文本2', text: '文本2', onBeforeChange },
        ]}
      />
      <p />
      <Segmented.Controller>
        <Segmented.Item name="文本1" text="文本1" onBeforeChange={onBeforeChange} />
        <Segmented.Item name="文本2" text="文本2" onBeforeChange={onBeforeChange} />
      </Segmented.Controller>
      <Modal
        visible={dialogVisible}
        title="是否修改选中项？"
        position={{ top: 100 }}
        okText="确认"
        cancelText="取消"
        onOk={() => {
          setDialogVisible(false);
          segmentedBeforeChange();
        }}
        onCancel={() => setDialogVisible(false)}
      >
        <p>内容内容</p>
      </Modal>
    </>
  );
}
```
