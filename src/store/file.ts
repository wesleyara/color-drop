import { defineStore } from "pinia";
import { ref } from "vue";

export const useFileStore = defineStore("file", () => {
  const file = ref<string | null>(null);

  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        file.value = reader.result as string;
        console.log(file.value);
      };
      reader.readAsDataURL(files[0]);
    } else {
      file.value = null;
    }
  };

  return {
    file,
    handleFileChange,
  };
});
