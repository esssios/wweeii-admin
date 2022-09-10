import { defineStore } from "pinia";
import { router } from "@/router";
import { getLocal, setLocal } from "@/utils";

export const WITHOUT_TAG_PATHS = ["/404", "/login"];

export const useTagsStore = defineStore("tag-store", {
  state() {
    return {
      tags: getLocal("tags") || [],
      activeTag: getLocal("active-tag") || "",
    };
  },
  actions: {
    setActiveTag(path) {
      this.activeTag = path;
      setLocal("active-tag", path);
    },
    setTags(tags) {
      this.tags = tags;
      setLocal("tags", tags);
    },
    addTag(tag = {}) {
      this.setActiveTag(tag.path);
      if (WITHOUT_TAG_PATHS.includes(tag.path) || this.tags.some((item) => item.path === tag.path)) return;
      this.setTags([...this.tags, tag]);
    },
    removeTag(path) {
      if (path === this.activeTag) {
        const activeIndex = this.tags.findIndex((item) => item.path === path);
        if (activeIndex > 0) {
          router.push(this.tags[activeIndex - 1].path);
        } else {
          router.push(this.tags[activeIndex + 1].path);
        }
      }
      this.setTags(this.tags.filter((tag) => tag.path !== path));
    },
    removeOther(curPath = this.activeTag) {
      this.setTags(this.tags.filter((tag) => tag.path === curPath));
      if (curPath !== this.activeTag) {
        router.push(this.tags[this.tags.length - 1].path);
      }
    },
    removeLeft(curPath) {
      const curIndex = this.tags.findIndex((item) => item.path === curPath);
      const filterTags = this.tags.filter((item, index) => index >= curIndex);
      this.setTags(filterTags);
      if (!filterTags.find((item) => item.path === this.activeTag)) {
        router.push(filterTags[filterTags.length - 1].path);
      }
    },
    removeRight(curPath) {
      const curIndex = this.tags.findIndex((item) => item.path === curPath);
      const filterTags = this.tags.filter((item, index) => index <= curIndex);
      this.setTags(filterTags);
      if (!filterTags.find((item) => item.path === this.activeTag)) {
        router.push(filterTags[filterTags.length - 1].path);
      }
    },
  },
});
