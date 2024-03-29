import { UsuarioCadastradoDto } from '@/usuarios/application/dtos/usuario.cadastrado.dto';
import { UsuarioStub } from '../../entities/usuario.entity.stub';

export class UsuarioCadastradoDtoStub {
  static cadastrado(): UsuarioCadastradoDto {
    return new UsuarioCadastradoDto(UsuarioStub.cadastrado());
  }
}
