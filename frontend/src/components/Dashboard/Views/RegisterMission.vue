<template>
 <div class="row">
    <div class="col-md-12">
      <button id="show-modal" type="button" class="btn btn-success" @click="showModal = true">Show Modal</button>

      <sweet-modal title="test">
        <sweet-modal-tab title="Tab 1" id="tab1">Contents of Tab 1</sweet-modal-tab>
        <sweet-modal-tab title="Tab 2" id="tab2">Contents of Tab 2</sweet-modal-tab>

        <sweet-button slot="button" color="light-grey">Action 2</sweet-button>
        <sweet-button slot="button">Action 1</sweet-button>
      </sweet-modal>

      <div class="card">
        <paper-table :data="table.data" :columns="table.columns">

        </paper-table>
      </div>
    </div>

   <modal name="hello-world">
     hello, world!
   </modal>
  </div>
</template>
<script>
  import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
  import PaperTable from 'components/UIComponents/PaperTable.vue'

  const tableColumns = ['미션코드', '구분', '테마 이름', '테마 상세설명',
    '콘텐츠 이름', '콘텐츠 상세설명',
    '전화', '운영시간+이용료', '위치정보', '난이도', '키워드']
  const tableData = [{
    미션코드: 'ms_pc1',
    구분: 'Dakota Rice',
    테마이름: '$36.738',
    테마상세설명: 'Niger',
    콘텐츠이름: 'Oud-Turnhout',
    콘텐츠상세설명: '',
    전화: '',
    운영시간이용료: '',
    위치정보: '',
    난이도: '',
    키워드: ''
  },
  {
    미션코드: 'ms_pc2',
    name: 'Minerva Hooper',
    salary: '$23,789',
    country: 'Curaçao',
    city: 'Sinaai-Waas'
  },
  {
    미션코드: 'ms_pc3',
    name: 'Sage Rodriguez',
    salary: '$56,142',
    country: 'Netherlands',
    city: 'Baileux'
  }]

  export default {
    components: {
      PaperTable,
      SweetModal,
      SweetModalTab
    },
    data () {
      return {
        table: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>
  #registBtn {
    width: 150px;
    height: 43px;
    position: static;
    margin-bottom: 20px;
  }
</style>
