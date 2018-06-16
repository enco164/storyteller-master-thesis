import {Injectable} from '@angular/core';
import {BaseResource} from '../../core/services/base-resource';
import {Media} from '../models/media.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MediaResource extends BaseResource<Media> {
  constructor(http: HttpClient) {
    super(http, '/api/media');
  }

  getMedia() {
    return this.getAll();
  }

  getMediaById(id) {
    return this.getById(id);
  }

  updateMedia(media: Media) {
    return this.update(media);
  }

  createMedia(media: Media) {
    return this.create(media);
  }

  deleteMedia(media: Media) {
    return this.destroy(media);
  }
}
