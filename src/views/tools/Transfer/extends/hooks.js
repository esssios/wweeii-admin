import {
  computed,
  reactive,
  ref
} from 'vue';

export function useTargetIndex(initialIndex) {
  const targetIndex = ref(initialIndex);

  function setTargetIndex(newIndex) {
    targetIndex.value = Number(newIndex);
  }

  return [
    targetIndex, setTargetIndex
  ]
}

export function useRightListData(initialData, checkedData) {
  const rightListData = ref(initialData);

  function addRightListData(newData, isClick = true) {
    rightListData.value = [
      ...rightListData.value,
      ...newData
    ]

    if (isClick) {
      checkedData.left = [];
    } else {
      let [dragItem] = newData;
      checkedData.left = checkedData.left.filter((item) => {
        return item.id !== dragItem.id;
      })
    }
  }

  function removeRightListData(newData, isClick = true) {
    newData.forEach(newItem => {
      rightListData.value = rightListData.value.filter(item => item.id !== newItem.id)
    })

    if (isClick) {
      checkedData.right = [];
    } else {
      let [dragItem] = newData;
      checkedData.right = checkedData.right.filter((item) => {
        return item.id !== dragItem.id;
      })
    }
  }

  return [
    rightListData,
    addRightListData,
    removeRightListData
  ]
}

export function useCheckedData() {
  const checkedData = reactive({
    left: [],
    right: []
  });

  function addCheckedData(leftOrRight, item) {
    switch (leftOrRight) {
      case 'left':
        checkedData.left.push(item);
        break;
      case 'right':
        checkedData.right.push(item);
        break;
      default:
        break;
    }
  }

  function removeCheckedData(leftOrRight, id) {
    switch (leftOrRight) {
      case 'left':
        checkedData.left = checkedData.left.filter(item => item.id !== id);
        break;
      case 'right':
        checkedData.right = checkedData.right.filter(item => item.id !== id);
        break;
      default:
        break;
    }
  }

  function setCheckedData(checked, leftOrRight, item, add=addCheckedData, remove=removeCheckedData) {
    checked
      ? add(leftOrRight, item)
      : remove(leftOrRight, item.id);
  };

  return [
    checkedData,
    setCheckedData
  ]
}

export function useCheckedAllData() {
  function checkAll() {

  }

  function removeCheckedAll() {

  }
}

export function useDragItem() {
  const dragItem = ref(null);

  function setDragItem(item) {
    dragItem.value = item;
  }

  return [
    dragItem,
    setDragItem
  ]
}

export function useComputedData(data, targetIndex, rightListData, checkedData) {
  const leftTitle = computed(() => data[targetIndex.value].title)

  const leftListData = computed(() => {
    const { data: currentData } = data[targetIndex.value];

    return currentData.filter(item => {
      if (!rightListData.value.find(({ id }) => item.id === id)) return item;
    })
  })

  const transferButtonDisabled = computed(() => ({
    left: checkedData.right.length === 0,
    right: checkedData.left.length === 0
  }))

  return {
    leftTitle,
    leftListData,
    transferButtonDisabled
  }
}