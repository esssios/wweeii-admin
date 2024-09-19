<script setup>
import Selector from "./components/Selector.vue";
import ListTitle from "./components/ListTitle.vue";
import buttonGroup from "./components/ButtonGroup.vue";
import ListItem from "./components/ListItem.vue";

import propsDefinition from "./extends/props.js";
import { useTargetIndex, useRightListData, useCheckedData, useDragItem, useComputedData } from "./extends/hooks.js";

const props = defineProps(propsDefinition);
const options = props.data.map(({ title }) => title);

const [targetIndex, setTargetIndex] = useTargetIndex(0);
const [checkedData, setCheckedData] = useCheckedData();
const [rightListData, addRightListData, removeRightListData] = useRightListData([], checkedData);
const [dragItem, setDragItem] = useDragItem();
const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
);

const changeCheckedAll = (checked, leftOrRight) => { };
</script>

<template>
  <div>
    <div>
      <selector :data="options" @select-change="setTargetIndex"></selector>
    </div>
    <div class="transfer">
      <div class="box left-list" @dragover.prevent @drop="removeRightListData([dragItem], false)">
        <list-title :title="leftTitle" left-or-right="left" @click-change-checked-all="changeCheckedAll"></list-title>
        <div>
          <list-item
            :data="leftListData"
            left-or-right="left"
            @click-check-box="setCheckedData"
            @drag-item="setDragItem"
          ></list-item>
        </div>
      </div>
      <div class="box">
        <button-group
          :button-disabled="transferButtonDisabled"
          @click-left-button="removeRightListData(checkedData.right)"
          @click-right-button="addRightListData(checkedData.left)"
        ></button-group>
      </div>
      <div class="box right-list" @dragover.prevent @drop="addRightListData([dragItem], false)">
        <list-title :title="rightTitle"></list-title>
        <div>
          <list-item
            :data="rightListData"
            left-or-right="right"
            @click-check-box="setCheckedData"
            @drag-item="setDragItem"
          ></list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.transfer {
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;

  .box {
    width: 120px;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
