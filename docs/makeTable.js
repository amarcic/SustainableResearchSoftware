      import { data } from './tableData.js';

      columnTitles = data[0].data.map( colTitle => { return { title: colTitle}; } );

      $(document).ready(function() {
         let table = $('#example').DataTable( {
              data: data.data,
              columns: columnTitles;
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
