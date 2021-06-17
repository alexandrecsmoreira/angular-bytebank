import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'dados/models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  title = 'novaTransferencia';

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) { }

  transferir() {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.router.navigateByUrl('extrato');
      },
      (error) => {
        console.error(error);
      }
    )
  };
}
