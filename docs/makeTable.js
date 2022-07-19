      import { data } from './tableData.js';

      $(document).ready(function() {
         let table = $('#example').DataTable( {
              data: data,
              columns: [
                  { title: "Framework" },
                  { title: "Criterion" },
                  { title: "Description" },
                  { title: "Category" }
              ]
          } );

        $('#example')
          .append( $('<tfoot/>') )
          .append( $('#example thead tr')
                  .clone(true)
                  .find('th')
                  .each( function(colIdx) {
                    const title = $(this).text();
                    $(this).html( '<input type="text" placeholder="Search '+title+'" />' );

                    $('input', this).on('keyup change', function() {
                      if (table.column(colIdx).search() !== this.value) {
                        table
                          .column(colIdx)
                          .search(this.value)
                          .draw()
                      }
                    });

                    $('input', this).on('click', function(event) {
                      event.stopPropagation();
                    });    
                  })
                 );
      } );
