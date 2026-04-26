<template>
    <div class="bg-slate-600">
        <div class="container min-h-screen">
            <div class="flex flex-col gap-3 pt-3">
                <input v-model="title" type="text" placeholder="Title" />
                <input v-model="description" type="text" placeholder="Description" />
                <div class="flex mb-3 gap-2">
                    <button class="btn bg-slate-300 flex-1" @click="handleSubmit">Submit</button>
                    <button class="btn bg-slate-300 flex-1" @click="handleRefresh">Refresh</button>
                </div>
            </div>
            <div>
                <div v-for="note in notes" :key="note.id" class="mb-2 bg-white p-2 flex justify-between items-center">
                    <div>
                        <p><strong>{{ note.title }}</strong></p>
                        <p>{{ note.description }}</p>
                    </div>
                    <div class="flex gap-10">
                        <!-- <button>Update</button> -->
                        <button class=" text-red-500" @click="handleDelete(note.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const client = useSupabaseClient()

const title = ref('')
const description = ref('')

const notes = ref([])

const handleRefresh = async () => {
    const { data } = await client.from('notes').select('*')
    notes.value = data
    return data ?? []
}

const handleSubmit = async () => {
    const { error } = await client.from('notes').insert({ title: title.value, description: description.value })
    title.value = ''
    description.value = ''
    if (error) { console.log("Error Desu: " + error) }
}

const handleDelete = async (id) => {
    const response = await client
        .from('notes')
        .delete()
        .eq('id', id)
}
</script>