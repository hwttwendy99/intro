# Tree · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法
由treeData直接生成树形结构

```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            children: [
            {
                title: 'Branch 0-0-2',
                key: '0-0-2',
                children: [
                {
                    title: 'Leaf',
                    key: '0-0-2-1',
                    children: [
                    {
                        title: 'Leaf 0-0-2',
                        key: '0-0-2-1-0',
                        children: [
                        {
                            title: 'Leaf',
                            key: '0-0-2-1-0-0',
                        },
                        ],
                    },
                    ],
                },
                ],
            },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
            {
                title: 'Branch 0-1-1',
                key: '0-1-1',
                children: [
                {
                    title: 'Leaf',
                    key: '0-1-1-0',
                },
                ],
            },
            ],
        },
    ];

    const [treeData, setTreeData] = useState(TreeData);

    return (
        <div>
            <Tree treeData={treeData}></Tree>
        </div>
    );
}
```
## 2. 默认展开父节点
```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            children: [
            {
                title: 'Branch 0-0-2',
                key: '0-0-2',
                children: [
                {
                    title: 'Leaf',
                    key: '0-0-2-1',
                    children: [
                    {
                        title: 'Leaf 0-0-2',
                        key: '0-0-2-1-0',
                        children: [
                        {
                            title: 'Leaf',
                            key: '0-0-2-1-0-0',
                        },
                        ],
                    },
                    ],
                },
                ],
            },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
            {
                title: 'Branch 0-1-1',
                key: '0-1-1',
                children: [
                {
                    title: 'Leaf',
                    key: '0-1-1-0',
                },
                ],
            },
            ],
        },
    ];

    const [treeData, setTreeData] = useState(TreeData);

    return (
        <Tree autoExpandParent={true} treeData={treeData}></Tree>
    );
}
```
## 3. 禁用某个节点
为 TreeNode 指定 disabled 属性的值即可禁用该节点，禁用时不可选中和展开
```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            disabled: true,
            children: [
            {
                title: 'Branch 0-0-2',
                key: '0-0-2',
                children: [
                {
                    title: 'Leaf',
                    key: '0-0-2-1',
                    children: [
                    {
                        title: 'Leaf 0-0-2',
                        key: '0-0-2-1-0',
                        children: [
                        {
                            title: 'Leaf',
                            key: '0-0-2-1-0-0',
                        },
                        ],
                    },
                    ],
                },
                ],
            },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
            {
                title: 'Branch 0-1-1',
                key: '0-1-1',
                children: [
                {
                    title: 'Leaf',
                    key: '0-1-1-0',
                },
                ],
            },
            ],
        },
    ];

    const [treeData, setTreeData] = useState(TreeData);

    return (
        <Tree treeData={treeData}></Tree>
    );
}
```
## 4. 禁止选择某个节点
为 TreeNode 指定 selectable 属性的值即可禁止选择该节点，支持展开节点
```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            selectable: false,
            children: [
            {
                title: 'Branch 0-0-2',
                key: '0-0-2',
                children: [
                {
                    title: 'Leaf',
                    key: '0-0-2-1',
                    children: [
                    {
                        title: 'Leaf 0-0-2',
                        key: '0-0-2-1-0',
                        children: [
                        {
                            title: 'Leaf',
                            key: '0-0-2-1-0-0',
                        },
                        ],
                    },
                    ],
                },
                ],
            },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
            {
                title: 'Branch 0-1-1',
                key: '0-1-1',
                children: [
                {
                    title: 'Leaf',
                    key: '0-1-1-0',
                },
                ],
            },
            ],
        },
    ];

    const [treeData, setTreeData] = useState(TreeData);

    return (
        <Tree treeData={treeData}></Tree>
    );
}
```
## 5. 定制节点图标
为 TreeNode 指定 icon 属性的值即可为任意节点指定任意图标
```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            icon: <DocCloud />,
            children: [
            {
                title: 'Branch 0-0-2',
                key: '0-0-2',
                icon: <DocCloud />,
                selectable: false,
            },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            icon: <KingMeerkatAvatar />,
            children: [
            {
                title: 'Branch 0-1-1',
                key: '0-1-1',
                icon:  <KingMeerkatAvatar />,
                children: [
                {
                    title: 'Leaf',
                    key: '0-1-1-0',
                    icon:  <KingMeerkatAvatar />,
                },
                ],
            },
            ],
        },
    ];

    const [treeData, setTreeData] = useState(TreeData);

    return (
        <div>
            <Tree treeData={treeData}></Tree>
        </div>
    );
}
```
## 6. 多选
`Tree` 设置 `checkable` 属性，可以启用多选
## 7. 受控模式
可以指定树的 selectedKeys 或 checkedKeys 或 expandedKeys 属性使树变为受控模式，在对应的 onSelect / onCheck / onExpand 回调中对返回值进行操作
```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            children: [
            {
                title: 'Leaf 0-0-1',
                key: '0-0-1',
            },
            {
                title: 'Branch 0-0-2',
                key: '0-0-2',
                children: [
                {
                    title: 'Leaf 0-0-2-1',
                    key: '0-0-2-1',
                },
                ],
            },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
            {
                title: 'Leaf 0-1-1',
                key: '0-1-1',
            },
            {
                title: 'Leaf 0-1-2',
                key: '0-1-2',
            },
            ],
        },
    ];

    const allCheckedKeys = ['0-0', '0-0-1', '0-0-2', '0-0-2-1', '0-1', '0-1-1', '0-1-2'];
    const allExpandedKeys = ['0-0', '0-1', '0-0-2'];
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState(allExpandedKeys);

    return (
        <>
            <div style={{ marginBottom: 20 }}>
                <Button
                    style={{ marginRight: 12 }}
                    type='primary'
                    onClick={() => setCheckedKeys(checkedKeys.length ? [] : allCheckedKeys)}
                >
                    {checkedKeys.length ? '取消全选' : '全选'}
                </Button>
                <Button
                    type='primary'
                    onClick={() => setExpandedKeys(expandedKeys.length ? [] : allExpandedKeys)}
                >
                    {expandedKeys.length ? '收起' : '展开'}
                </Button>
            </div>
            <Tree
                checkedKeys={checkedKeys}
                selectedKeys={selectedKeys}
                expandedKeys={expandedKeys}
                onSelect={(keys, extra) => {
                    console.log(keys, extra);
                    setSelectedKeys(keys);
                }}
                onCheck={(keys, extra) => {
                    console.log(keys, extra);
                    setCheckedKeys(keys);
                }}
                onExpand={(keys, extra) => {
                    console.log(keys, extra);
                    setExpandedKeys(keys);
                }}
                checkable 
                treeData={TreeData} 
            />
        </>
    );
}
```
## 8. 关闭勾选传导
`Tree` 设置 `checkStrictly` 属性为`true`，可以关闭勾选传导(仅在多选模式下生效)。
```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            children: [
            {
                title: 'Leaf',
                key: '0-0-1',
            },
            {
                title: 'Branch 0-0-2',
                key: '0-0-2',
                children: [
                {
                    title: 'Leaf',
                    key: '0-0-2-1',
                },
                {
                    title: 'Leaf',
                    key: '0-0-2-2',
                },
                ],
            },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
            {
                title: 'Branch 0-1-1',
                key: '0-1-1',
                children: [
                {
                    title: 'Leaf ',
                    key: '0-1-1-1',
                },
                {
                    title: 'Leaf ',
                    key: '0-1-1-2',
                },
                ],
            },
            {
                title: 'Leaf',
                key: '0-1-2',
            },
            ],
        },
    ];

    return (
       <Tree checkable checkStrictly={true} treeData={TreeData} />
    );
}
```
## 9. 拖拽
可拖拽的树节点

```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            children: [
            {
                title: 'Leaf 0-0-1',
                key: '0-0-1',
            },
            {
                title: 'Branch 0-0-2',
                key: '0-0-2',
                children: [
                {
                    draggable: false,
                    title: 'Leaf 0-0-2-1 (Drag disabled)',
                    key: '0-0-2-1',
                },
                ],
            },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
            {
                title: 'Branch 0-1-1',
                key: '0-1-1',
                children: [
                {
                    title: 'Leaf 0-1-1-1',
                    key: '0-1-1-1',
                },
                {
                    title: 'Leaf 0-1-1-2',
                    key: '0-1-1-2',
                },
                ],
            },
            {
                title: 'Leaf 0-1-2',
                key: '0-1-2',
            },
            ],
        },
    ];

    const [treeData, setTreeData] = useState(TreeData);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [checked, setChecked] = useState(false);
    
    return (
            <Tree
                draggable
                checkable={checked}
                onDrop={({ dragNode, dropNode, dropPosition }) => {
                const loop = (data, key, callback) => {
                    data.some((item, index, arr) => {
                    if (item.key === key) {
                        callback(item, index, arr);
                        return true;
                    }

                    if (item.children) {
                        return loop(item.children, key, callback);
                    }
                    });
                };

                const data = [...treeData];
                let dragItem;
                loop(data, dragNode.props._key, (item, index, arr) => {
                    arr.splice(index, 1);
                    dragItem = item;
                    dragItem.className = 'tree-node-dropover';
                });

                if (dropPosition === 0) {
                    loop(data, dropNode.props._key, (item, index, arr) => {
                    item.children = item.children || [];
                    item.children.push(dragItem);
                    });
                } else {
                    loop(data, dropNode.props._key, (item, index, arr) => {
                    arr.splice(dropPosition < 0 ? index : index + 1, 0, dragItem);
                    });
                }

                setTreeData([...data]);
                setTimeout(() => {
                    dragItem.className = '';
                    setTreeData([...data]);
                }, 1000);
                }}
                treeData={treeData}
            />)
}
```
## 10. 自定义 title 的渲染
为 Tree 设置 renderExtra 可以自定义树节点的展示
```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk',
            key: '0-0',
            children: [
            {
                title: 'Leaf',
                key: '0-0-1',
            },
            {
                title: 'Branch',
                key: '0-0-2',
                children: [
                {
                    title: 'Leaf',
                    key: '0-0-2-1',
                },
                ],
            },
            ],
        },
        {
            title: 'Trunk',
            key: '0-1',
            children: [
            {
                title: 'Branch',
                key: '0-1-1',
                children: [
                {
                    title: 'Leaf',
                    key: '0-1-1-1',
                },
                {
                    title: 'Leaf',
                    key: '0-1-1-2',
                },
                ],
            },
            {
                title: 'Leaf',
                key: '0-1-2',
            },
            ],
        },
    ];

    const [treeData, setTreeData] = useState(TreeData);

    return (
        <Tree
            treeData={treeData}
            renderTitle={(node) => {
                return (
                    <div
                        style={{
                            marginLeft: 10
                        }}
                    >   
                        {`Title is ${node.title}, Key is ${node._key}`}
                    </div>
                );
            }}
        />
  );    
}
```
## 11. 定制额外节点
为 Tree 设置 renderExtra 可以自定义树节点的展示
```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk',
            key: '0-0',
            children: [
            {
                title: 'Leaf',
                key: '0-0-1',
            },
            {
                title: 'Branch',
                key: '0-0-2',
                children: [
                {
                    title: 'Leaf',
                    key: '0-0-2-1',
                },
                ],
            },
            ],
        },
        {
            title: 'Trunk',
            key: '0-1',
            children: [
            {
                title: 'Branch',
                key: '0-1-1',
                children: [
                {
                    title: 'Leaf',
                    key: '0-1-1-1',
                },
                {
                    title: 'Leaf',
                    key: '0-1-1-2',
                },
                ],
            },
            {
                title: 'Leaf',
                key: '0-1-2',
            },
            ],
        },
    ];

    const [treeData, setTreeData] = useState(TreeData);
    return (
        <Tree
            treeData={treeData}
            renderExtra={(node) => {
            return (
                <div
                style={{
                    marginLeft: 10
                }}
                >   
                    <PeopleAddressBookTwo/>
                </div>
            );
            }}
        />
  );    
}
```
## 12. 自定义 TreeData 的字段名称
通过 fieldNames 字段可以自定义 TreeData 的字段名

```jsx
function TreeDemo() {
    const TreeData = [
        {
            label: 'Trunk 0-0',
            value: '0-0',
            items: [
            {
                label: 'Branch 0-0-2',
                value: '0-0-2',
                selectable: false,
                items: [
                {
                    label: 'Leaf',
                    value: '0-0-2-1',
                    items: [
                    {
                        label: 'Leaf 0-0-2',
                        value: '0-0-2-1-0',
                        items: [
                        {
                            label: 'Leaf',
                            value: '0-0-2-1-0-0',
                        },
                        ],
                    },
                    ],
                },
                ],
            },
            ],
        },
        {
            label: 'Trunk 0-1',
            value: '0-1',
            items: [
            {
                label: 'Branch 0-1-1',
                value: '0-1-1',
                items: [
                {
                    label: 'Leaf',
                    value: '0-1-1-0',
                },
                ],
            },
            ],
        },
    ];

    const [treeData, setTreeData] = useState(TreeData);
    return (
        <div>
            <Tree
                treeData={treeData}
                fieldNames={{
                    key: 'value',
                    title: 'label',
                    children: 'items',
                }}
            />
        </div>
  );
}
```
## 13. 动态加载节点
```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
                {
                    title: 'Branch 0-1-1',
                    key: '0-1-1',
                },
            ],
        },
    ];
    const [treeData, setTreeData] = useState(TreeData);

    const loadMore = (treeNode) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                treeNode.props.dataRef.children = [
                    {
                        title: `leaf`,
                        key: `${treeNode.props._key}-1`,
                        isLeaf: false,
                    },
                ];
                setTreeData([...treeData]);
                resolve();
            }, 500);
        });
    };

    return (
        <Tree treeData={treeData} loadMore={loadMore} />
  );
}
```
## 14. 搜索树

```jsx
function TreeDemo() {
    const TreeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            children: [
            {
                title: 'Branch 0-0-1',
                key: '0-0-1',
                children: [
                {
                    title: 'Leaf 0-0-1-1',
                    key: '0-0-1-1',
                },
                {
                    title: 'Leaf 0-0-1-2',
                    key: '0-0-1-2',
                },
                ],
            },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
                {
                    title: 'Branch 0-1-1',
                    key: '0-1-1',
                    children: [
                    {
                        title: 'Leaf 0-1-1-0',
                        key: '0-1-1-0',
                    },
                    ],
                },
                {
                    title: 'Branch 0-1-2',
                    key: '0-1-2',
                    children: [
                    {
                        title: 'Leaf 0-1-2-0',
                        key: '0-1-2-0',
                    },
                    ],
                },
            ],
        },
    ];

    function searchData(inputValue) {
        const loop = (data) => {
            const result = [];
            data.forEach((item) => {
            if (item.title.toLowerCase().indexOf(inputValue.toLowerCase()) > -1) {
                result.push({ ...item });
            } else if (item.children) {
                const filterData = loop(item.children);

                if (filterData.length) {
                result.push({ ...item, children: filterData });
                }
            }
            });
            return result;
        };

        return loop(TreeData);
    }

    const [treeData, setTreeData] = useState(TreeData);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (!inputValue) {
            setTreeData(TreeData);
        } else {
            const result = searchData(inputValue);
            setTreeData(result);
        }
    }, [inputValue]);

    return (
        <div>
            <Input 
                value={inputValue} 
                onChange={(e)=>
                    setInputValue(e.target.value)
                } 
                suffixIcon={<Magnifier />} 
                placeholder={""} 
                style={{ width: 200, marginBottom: 16 }}
            />
            <Tree 
                treeData={treeData} 
                autoExpandParent={true} 
                renderTitle={({ title }) => {
                    if (inputValue) {
                        const index = title.toLowerCase().indexOf(inputValue.toLowerCase());

                        if (index === -1) {
                            return title;
                        }

                        const prefix = title.substr(0, index);
                        const suffix = title.substr(index + inputValue.length);
                        return (
                            <span>
                                {prefix}
                                <span style={{ color: '#6aa1ff' }}>
                                {title.substr(index, inputValue.length)}
                                </span>
                                {suffix}
                            </span>
                            );
                        }

                    return title;
                }}
            />   
        </div>
  );
}
```
## 15. 虚拟列表
通过指定 virtualListProps 来开启虚拟列表，在大量数据时获得高性能表现

```jsx
function TreeDemo() {
    function loop(path = '0', level = 2) {
        const list = [];

        for (let i = 0; i < 10; i += 1) {
            const key = `${path}-${i}`;
            const treeNode = {
                title: key,
                key,
            };

            if (level > 0) {
                treeNode.children = loop(key, level - 1);
            }

            list.push(treeNode);
        }

        return list;
    }

    const treeData = loop();

    return (
        <Tree
            checkable
            autoExpandParent={true}
            treeData={treeData}
            height={400}
        />
    )
}
```
