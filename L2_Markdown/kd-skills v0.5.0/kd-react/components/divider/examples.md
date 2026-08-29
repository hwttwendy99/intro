# Divider · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div>
      <p>
        让金山办公的产品界面更具凝聚力
      </p>
      <Divider />
      <p>
        KDesign是Kingsoft Office Design System(金山办公设计系统）的简称。<br />
        KD主要服务于金山办公旗下办公产品的体验设计和技术实现；同为公司的设计、交互、产品、开发、测试等角色提供组件、指南、工具的一站式解决方案，达到团队协作更高效。<br />
        KD主要由KSUX及开发团队共同构建及维护让金山办公的产品界面更具凝聚力。
      </p>
    </div>
  );
}
```

## 2. 带文案

```jsx
function Demo() {
  return (
    <div>
      <p>
        让金山办公的产品界面更具凝聚力
      </p>
      <Divider>分割线</Divider>
      <p>
        KDesign是Kingsoft Office Design System(金山办公设计系统）的简称。
      </p>
      <Divider orientation="left">分割线居左</Divider>
      <p>
        KD主要服务于金山办公旗下办公产品的体验设计和技术实现；同为公司的设计、交互、产品、开发、测试等角色提供组件、指南、工具的一站式解决方案，达到团队协作更高效。
      </p>
      <Divider orientation="right">分割线居右</Divider>
      <p>
        KD主要由KSUX及开发团队共同构建及维护让金山办公的产品界面更具凝聚力。
      </p>
    </div>
  );
}
```

## 3. 带文案偏移

```jsx
function Demo() {
  return (
    <div>
      <Divider orientation="left">分割线居左</Divider>
      <Divider orientation="left" orientationMargin="20px">
        分割线居左
      </Divider>

      <Divider orientation="right">分割线居右</Divider>
      <Divider orientation="right" orientationMargin="20px">
        分割线居右
      </Divider>
    </div>
  );
}
```

## 4. 垂直分割线

```jsx
function Demo() {
  return (
    <div>
      <Divider type="vertical" />
      <span>垂直分割线</span>
      <Divider type="vertical" />
      <span>垂直分割线</span>
      <Divider type="vertical" />
      <span>垂直分割线</span>
    </div>
  );
}
```

## 5. 虚线

```jsx
function Demo() {
  return (
    <div>
      <p>
        KDesign是Kingsoft Office Design System(金山办公设计系统）的简称。
      </p>
      <Divider dashed />
      <p>
        KD主要服务于金山办公旗下办公产品的体验设计和技术实现；同为公司的设计、交互、产品、开发、测试等角色提供组件、指南、工具的一站式解决方案，达到团队协作更高效。
      </p>
    </div>
  );
}
```
